import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.less']
})
export class AddCourseComponent implements OnInit {
  public addCourseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.addCourseForm = this.fb.group({
      titleInput: ['', [Validators.required]],
      descriptionField: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log('form submitted');
  }
}
