import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class LoaderOverlayService {
  public isLoading: Subject<boolean> = new Subject<boolean>();

  public showLoader(): void {
    this.isLoading.next(true);
  }

  public hideLoader(): void {
    this.isLoading.next(false);
  }
}
