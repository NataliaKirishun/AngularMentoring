import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CourseListItem, ICourseListItem } from '../../models/course-list-item';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.less']
})
export class AddCourseComponent implements OnInit {
  public courseData: ICourseListItem = {
    title: '',
    description: '',
    duration: null,
    date: '',
    authors: '',
  };

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe( (data) => {
      if (data.id) {
        this.courseService.getItemById(data['id'])
          .subscribe((courseData) => {
            this.courseData = courseData;
        });
      }
    });
  }

  handleDuration(duration: number) {
    this.courseData.duration = duration;
  }

  handleDate(date: string) {
    this.courseData.date = date;
  }

  handleAuthors(authors: string) {
    this.courseData.authors = authors;
  }

  onSubmit() {
    console.log('add course form submitted');
    console.log('courseTitle', new CourseListItem(this.courseData));
    this.courseService.createCourse( new CourseListItem(this.courseData))
      .subscribe(() =>  {
        this.router.navigate(['courses']);
      });
  }

  closeAddForm() {
    this.router.navigate(['courses']);
  }
}
