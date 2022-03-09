import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class BusyLoaderInterceptor implements HttpInterceptor {

  constructor(
  ) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler): Observable<HttpEvent<any>> {
    const loaderContainer: HTMLElement = document
      .getElementsByClassName('loader-container')
      .item(0) as HTMLElement;
    loaderContainer.style.display = 'block';
    return next.handle(request).pipe(tap((observer: any) => {
      loaderContainer.style.display = 'none';
    }));
  }
}
