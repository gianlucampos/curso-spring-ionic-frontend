import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CredenciaisDTO} from "../models/credenciais.dto";
import {API_CONFIG} from "../config/api.config";
import {LocalUser} from "../models/local_user";
import {StorageService} from "./storage.service";
import {JwtHelper} from "angular2-jwt";

@Injectable()
export class AuthService {

  jwtHelper: JwtHelper = new JwtHelper();

  constructor(public http: HttpClient, public storage: StorageService) {
  }

  authenticate(creds: CredenciaisDTO) {
    return this.http.post(
      `${API_CONFIG.baseUrl}/login`,
      creds,
      {
        observe: 'response',
        responseType: 'text'
      });
  }

  successfulLogin(authorizationValue: string) {
    let token = authorizationValue.substring(7);
    let user: LocalUser = {
      token: token,
      email: this.jwtHelper.decodeToken(token).sub
    };
    this.storage.setLocalUser(user);
  }

  logout() {
    this.storage.setLocalUser(null);
  }

}
