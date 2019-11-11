import {Directive, ElementRef, HostBinding, Input, OnChanges } from '@angular/core';

import { getDateDifference } from '../../helpers/date-helper';
import { COURSE_ITEM } from '../../config/course-item.config';

@Directive({
  selector: '[appCircleRound]'
})
export class CircleRoundDirective implements OnChanges {
  @Input('appCircleRound') public date: string;

  private dateDiff: number;

  constructor(private element: ElementRef) {}

  ngOnChanges(): void {
      const courseDate = new Date(this.date);
      const dateNow = Date.now();
      this.dateDiff = getDateDifference(dateNow, courseDate);
  }

  @HostBinding('class.blue')
  get isUpcoming() {
    return this.dateDiff < COURSE_ITEM.UPCOMING_COURSE.START;
  }

  @HostBinding('class.green')
  get isFresh() {
    return (this.dateDiff <= COURSE_ITEM.FRESH_COURSE.START) && (this.dateDiff >= COURSE_ITEM.FRESH_COURSE.END);
  }
}
