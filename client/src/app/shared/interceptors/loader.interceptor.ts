import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderOverlayService } from '../services/loader-overlay.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderOverlayService) {}

  public intercept( request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.showLoader();
    return next.handle(request).pipe(
      finalize(() => this.loaderService.hideLoader())
    );
  }
}
