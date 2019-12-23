import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.states';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  public token: Observable<string>;

  constructor(
    private store: Store<AppState>,
  ) {
    this.token = this.store.select('authState', 'token');
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    this.token.subscribe(
      (token: string) => {
        if (token) {
          request = request.clone({
            setHeaders: {'access-token': token}
          });
        }
      }
    );
    return next.handle(request);
  }
}
