import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.less']
})
export class CourseSearchComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  public searchValue = '';

  public handleSearch(): void {
    console.log('search');
    this.search.emit(this.searchValue);
  }
}
