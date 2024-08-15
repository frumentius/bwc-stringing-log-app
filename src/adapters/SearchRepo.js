import { ApiService } from "../frameworks/services/APIServices.js";
import * as CONFIG from "../utilities/config.js";

export class SearchRepo {
  constructor() {
    this.apiService = new ApiService();
  }

  async send(data) {
    return this.apiService.get(
      CONFIG.GOOGLE_SHEET_APP_SCRIPT_URL + "?param=" + data
    );
  }
}
