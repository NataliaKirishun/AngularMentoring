import { Component } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.less']
})
export class AddCourseComponent {
  public courseTitle = '';
  public courseDescription = '';
  public courseDuration = '';
  public courseDate = '';
  public courseAuthors = '';

  onSubmit() {
    console.log('add course form submitted');
    console.log('courseTitle', this.courseTitle);
    console.log('courseDescription', this.courseDescription);
    console.log('courseDuration', this.courseDuration);
    console.log('courseDate', this.courseDate);
    console.log('courseAuthors', this.courseAuthors);
  }
}
