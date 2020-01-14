import { Component, OnInit, OnDestroy, forwardRef, EventEmitter, Output, Input } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormArray, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/internal/operators';
import { Store } from '@ngrx/store';
import { RootStoreState } from '../../../../../store';
import { IAuthors } from '../../../models/course-list-item';

@Component({
  selector: 'app-course-authors',
  templateUrl: './course-authors.component.html',
  styleUrls: ['./course-authors.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CourseAuthorsComponent),
      multi: true
    }
  ]
})
export class CourseAuthorsComponent implements OnInit, OnDestroy {
  @Input() ngClass: string | null;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  public authorsList: Observable<IAuthors[]> = this.store.select(state => state.author.authors);
  public addAuthor: Subject<string> = new Subject<string>();
  private componentDestroyed = new Subject();
  public isDisabled: boolean;
  public addedAuthors = new FormArray([]);
  public faTimes = faTimes;

  private onChange = (authors?: IAuthors[]) => {};
  private onTouched = () => {};

  constructor(private store: Store<RootStoreState.State>) {}

  ngOnInit(): void {
    this.addAuthor
      .pipe(
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

  get value(): IAuthors[] {
    return this.addedAuthors.value;
  }

  writeValue(authors?: IAuthors[]): void {
    if (authors) {
      authors.forEach((author: IAuthors) => this.addedAuthors.push(new FormControl(author)));
    } else {
      this.onTouched();
    }
    this.onChange(this.value);
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onAuthorSearch(e: Event): void {
    const newAuthor = (e.target as HTMLInputElement).value;
    this.addAuthor.next(newAuthor);
  }

  addNewAuthor(newAuthor: IAuthors) {
    if (!this.addedAuthors.value.some(author => author.id === newAuthor.id)) {
      this.addedAuthors.push(new FormControl(newAuthor));
    }
    this.writeValue();
  }

  deleteAuthor(i: number): void {
    this.addedAuthors.removeAt(i);
  }
}
