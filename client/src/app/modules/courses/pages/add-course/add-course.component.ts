import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CourseListItem, ICourseListItem } from '../../models/course-list-item';
import { CourseService } from '../../services/course.service';

import { formatDate } from '../../../../helpers/date-helper';

import { ModeType } from './constans/mode-type-enum';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.less']
})
export class AddCourseComponent implements OnInit {
  public courseData: ICourseListItem = {
    id: null,
    title: '',
    description: '',
    duration: null,
    date: '',
    authors: '',
  };
  public mode: string;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe( (data) => {
      const id = data.id;
      if (id) {
        this.courseService.getItemById(id)
          .subscribe((courseData) => {
            this.courseData = courseData;
        });
        this.mode = ModeType.EDIT;
      } else {
        this.mode = ModeType.ADD;
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
    const courseItem: ICourseListItem = new CourseListItem(this.courseData);
    this.mode === ModeType.ADD ? this.createCourse(courseItem) : this.editCourse(courseItem);
  }

  closeAddForm() {
    this.router.navigate(['courses']);
  }

  get courseDate() {
    return formatDate(this.courseData.date);
  }

  createCourse(course: ICourseListItem): void {
    this.courseService.createCourse(course)
      .subscribe(() =>  {
        this.router.navigate(['courses']);
      });
  }

  editCourse(course: ICourseListItem): void {
    this.courseService.updateItem(course)
      .subscribe( () => {
        this.router.navigate(['courses']);
      });
  }
}
