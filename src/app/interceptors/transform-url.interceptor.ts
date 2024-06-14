import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

// const baseUrl ='http://localhost:3000/'
const baseUrl = environment.baseUrl

@Injectable()
export class TransformUrlInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const newUrl = request.clone({
      url:baseUrl +request.url
    })
    console.log(newUrl);
    return next.handle(newUrl);
  }
}
