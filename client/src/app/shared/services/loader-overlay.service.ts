import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class LoaderOverlayService {
  private visibility: Subject<boolean> = new Subject<boolean>();

  public showLoader(): void {
    this.visibility.next(true);
  }

  public hideLoader(): void {
    this.visibility.next(false);
  }

  public shouldLoaderBeVisible(): Observable<boolean> {
    return this.visibility.asObservable();
  }
}
