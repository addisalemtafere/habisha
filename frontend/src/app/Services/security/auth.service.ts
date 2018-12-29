import {Injectable} from '@angular/core';
import {BaseService} from "../Base.service";
import {HttpClient} from "@angular/common/http";
import {AppConfiguration} from "../../config/appconfig";
import {ErrorMessage} from "../../../@share/services/errMessageService";
import {UserModel} from "../../model/auth/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService<UserModel> {

  constructor(
    protected http: HttpClient,
    protected appConfig: AppConfiguration,
    protected  errMsg: ErrorMessage) {
    super(http, appConfig.urls.url('Url'), errMsg);
  }
}
