import {Injectable} from "@angular/core";
import {HttpInterceptor, HttpRequest, HttpHandler} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {isNotNullOrUndefined} from "codelyzer/util/isNotNullOrUndefined";

@Injectable()
export class AuthRequestInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const accessToken = this.authService.getAccessToken();

    if(!isNotNullOrUndefined(accessToken)){
      return next.handle(req);
    }

    req = req.clone({
      setHeaders: {
        Authorization: "Bearer " + accessToken
      }
    });
    return next.handle(req);
  }
}
