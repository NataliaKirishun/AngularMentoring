import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-authors',
  templateUrl: './course-authors.component.html',
  styleUrls: ['./course-authors.component.less']
})
export class CourseAuthorsComponent {
  @Input() courseAuthors;
}
