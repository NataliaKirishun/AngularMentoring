import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoaderOverlayService } from '../../services/loader-overlay.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';

@Component({
  selector: 'app-loader-overlay',
  templateUrl: './loader-overlay.component.html',
  styleUrls: ['./loader-overlay.component.less'],
})
export class LoaderOverlayComponent {
  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoaderOverlayService) {}
}
