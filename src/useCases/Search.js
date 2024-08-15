//import { Search as SearchE } from "../entities/Search.js";
import { SearchRepo } from "../adapters/SearchRepo.js";

export class Search {
  constructor() {
    this.repo = new SearchRepo();
  }

  execute(param) {
    //let search_entities = new SearchE(param);
    return this.repo.send(param);
  }
}
