import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoaderOverlayService } from '../../services/loader-overlay.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';

@Component({
  selector: 'app-loader-overlay',
  templateUrl: './loader-overlay.component.html',
  styleUrls: ['./loader-overlay.component.less'],
})
export class LoaderOverlayComponent implements OnInit, OnDestroy {
  public show = true;
  private componentDestroyed = new Subject();

  constructor(private loaderService: LoaderOverlayService) { }

  ngOnInit(): void {
    this.loaderService
      .shouldLoaderBeVisible()
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe((visibility: boolean) => {
      console.log('visibility', visibility);
      this.show = visibility;
      console.log('this.show', this.show);
    });
  }

  ngOnDestroy(): void {
    this.componentDestroyed.next();
    this.componentDestroyed.unsubscribe();
  }


}
