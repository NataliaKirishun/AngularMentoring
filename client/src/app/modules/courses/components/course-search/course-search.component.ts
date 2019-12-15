import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.less']
})
export class CourseSearchComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  public handleSearch(searchValue: string): void {

    const observable = new Observable(observer => {
      observer.next(searchValue);
    });

    observable
      .pipe(
        filter(query => !query || query.length >= 3),
      )
      .subscribe((query: string) => {
      this.search.emit(query);
    });
  }

}
