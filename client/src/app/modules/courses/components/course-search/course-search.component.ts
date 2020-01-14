import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, debounceTime, takeUntil } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.less']
})
export class CourseSearchComponent implements OnInit, OnDestroy {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  public courseSearch: Subject<string> = new Subject<string>();
  private componentDestroyed = new Subject();
  public searchInput: FormControl;

  ngOnInit(): void {
    this.searchInput = new FormControl('');
    this.courseSearch
      .pipe(
        filter((query: string) => !query || query.length >= 3),
        debounceTime(200),
        takeUntil(this.componentDestroyed),
      )
      .subscribe((query: string) => {
        this.search.emit(query);
      });
  }

  ngOnDestroy(): void {
    this.componentDestroyed.next();
    this.componentDestroyed.unsubscribe();
  }

  public handleSearch(searchValue: string): void {
    this.courseSearch.next(searchValue);
  }
}
