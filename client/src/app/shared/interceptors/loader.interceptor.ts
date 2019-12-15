import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, debounceTime } from 'rxjs/operators';
import { LoaderOverlayService } from '../services/loader-overlay.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderOverlayService) {}

  public intercept( request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.showLoader();

    return next.handle(request).pipe(
      debounceTime(1000),
      tap(this.handleSuccessResponse, this.handleErrorResponse),
    );
  }

  private handleSuccessResponse = (event: HttpEvent<any>) => {
    if (event instanceof HttpResponse) {
      this.hideLoader();
    }
  }

  private handleErrorResponse = (error: Error) => {
    this.hideLoader();
  }

  private showLoader(): void {
    this.loaderService.showLoader();
  }
  private hideLoader(): void {
    this.loaderService.hideLoader();
  }
}
