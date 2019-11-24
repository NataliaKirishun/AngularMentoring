import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-course-authors',
  templateUrl: './course-authors.component.html',
  styleUrls: ['./course-authors.component.less']
})
export class CourseAuthorsComponent {
  @Output() changeAuthors: EventEmitter<string> = new EventEmitter<string>();

  public courseAuthors = '';

  handleAuthors(): void {
    this.changeAuthors.emit(this.courseAuthors);
  }
}
