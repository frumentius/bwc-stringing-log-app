import { openDB } from "idb";
import { isArray, isObject } from "../../utilities/validators.js";
import * as CONFIG from "../../utilities/config.js";

export class IdbService {
  constructor() {
    this.idb_name = CONFIG.IDB_NAME;
    this.idb_tables = CONFIG.IDB_TABLES;
    this.idb = null;
  }

  async init() {
    this.idb = await this.connect();
  }

  async connect() {
    return openDB(this.idb_name, 1, {
      upgrade(db) {
        this.idb_tables.forEach((val) => {
          db.createObjectStore(val, {
            keyPath: "id",
            autoIncrement: true,
          });
          /* let store = db.createObjectStore(val, {
            keyPath: "id",
            autoIncrement: true,
          });
          if (val === "project_list")
            store.createIndex("updated_at", "updated_at"); */
        });
      },
    });
  }

  async store(tableName, data) {
    const checkTypeObj = isObject(data),
      checkTypeArr = isArray(data);
    if (checkTypeArr || checkTypeObj) {
      if (checkTypeObj) return this.idb.add(tableName, data);
      else if (checkTypeArr) {
        const tx = this.idb.transaction(tableName, "readwrite");
        data.forEach(function (val) {
          tx.store.add(val);
        });
        return tx.done;
      }
    }
  }

  async getAll(tableName, index) {
    if (
      typeof index !== "undefined" &&
      index !== undefined &&
      index !== null &&
      index !== "" &&
      index
    ) {
      return this.idb.getAllFromIndex(tableName, index);
    } else {
      return this.idb.getAll(tableName);
    }
  }

  async get(tableName, key) {
    return this.idb.get(tableName, key);
  }

  async update(tableName, newData) {
    return this.idb.put(tableName, newData);
  }

  async delete(tableName, key) {
    if (isArray(key)) {
      for (let i = 0; i < key.length; i++) {
        this.idb.delete(tableName, key[i]);
      }
      return Promise.resolve("Done");
    } else return this.idb.delete(tableName, key);
  }

  async clear(tableName) {
    return await this.idb.clear(tableName);
  }
}
