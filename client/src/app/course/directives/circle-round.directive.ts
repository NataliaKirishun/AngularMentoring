import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appCircleRound]'
})
export class CircleRoundDirective implements OnChanges {
  @Input('appCircleRound') public color: string;

  constructor(private element: ElementRef) {}

  public ngOnChanges(): void {
    if (this.color) {
      this.element.nativeElement.style.border = `2px solid ${this.color}`;
    }
  }
}
