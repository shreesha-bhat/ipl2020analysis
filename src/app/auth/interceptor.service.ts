import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private authservice:AuthServiceService) { }
  intercept(req, next) {
    if (req.headers.get('skip')) {
      return next.handle(req);
    }
    const tokenizedReq = req.clone({
      setHeaders: {
        'authorization': `JWT ${this.authservice.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
