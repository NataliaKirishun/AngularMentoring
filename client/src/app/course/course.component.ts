import { Component, OnInit } from '@angular/core';
import { CourseListItem } from './models/course-list-item';
import { CourseService } from "./course.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less']
})
export class CourseComponent implements OnInit {
  public courseList: CourseListItem[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseList = this.courseService.getCourseList();
    console.log(this.courseList);
  }

  public deleteCourse(courseId){
    console.log('course to delete',courseId);
  }

}
