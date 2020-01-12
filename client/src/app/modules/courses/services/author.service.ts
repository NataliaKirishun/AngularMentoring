import { Injectable } from '@angular/core';
import { API_GATEWAY } from '../../../config/services.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author, IAuthors, ICourseListItem } from '../models/course-list-item';
import { debounceTime, map } from 'rxjs/internal/operators';

const AUTH_SERVICE_HOST = `${API_GATEWAY}/authors`;

@Injectable()
export class AuthorService {

    constructor(
    private http: HttpClient,
  ) {}

  searchAuthors(searchStr: string): Observable<IAuthors[]> {
    return this.http.get<ICourseListItem[]>(AUTH_SERVICE_HOST, {
      params: {
        textFragment: searchStr,
      }
    })
      .pipe(
        map( authors => authors.map( author => new Author(author))),
        debounceTime(1000)
      );
  }
}
