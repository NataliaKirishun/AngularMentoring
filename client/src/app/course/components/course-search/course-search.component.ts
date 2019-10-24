import { Component } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.less']
})
export class CourseSearchComponent {
  public searchValue: string;

  public handleSearch(): void {
    console.log('searchValue', this.searchValue);
  }
}
