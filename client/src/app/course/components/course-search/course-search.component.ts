import { Component, OnInit } from '@angular/core';
import { NgModel} from '@angular/forms';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.less']
})
export class CourseSearchComponent implements OnInit {
  public searchValue: string="";

  constructor() { }

  ngOnInit() {
  }

  public handleSearch(): void{
    console.log('searchValue', this.searchValue);
  }

}
