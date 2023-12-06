import {LocalUser} from "../config/local_user";
import {STORAGE_KEYS} from "../config/storage_keys.config";
import {Injectable} from "@angular/core";

@Injectable()
export class StorageService {

  getLocalUser(): LocalUser {
    let usr = localStorage.getItem(STORAGE_KEYS.localUser);
    if (usr == null) {
      return null;
    }
    return JSON.parse(usr);
  }

  setLocalUser(obj: LocalUser) {
    if (obj == null) {
      localStorage.removeItem(STORAGE_KEYS.localUser);
    }
    return localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
  }

}
