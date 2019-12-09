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
    name: '',
    description: '',
    length: null,
    date: '',
    authors: {
      name: null,
      id: null,
    },
  };
  public mode: string;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe( (data) => {
      const id = +data.id;
      if (id) {
        // this.courseData = this.courseService.getItemById(id);
        this.mode = ModeType.EDIT;
      } else {
        this.mode = ModeType.ADD;
      }
    });
  }

  handleDuration(length: number) {
    this.courseData.length = length;
  }

  handleDate(date: string) {
    this.courseData.date = date;
  }

  handleAuthors(author: string) {
    const authorId = (new Date()).getTime();
    this.courseData.authors = {
      id: authorId,
      name: author,
    };
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
        this.courseService.updateCurrentItem(course);
        this.router.navigate(['courses']);
      });
  }
}
