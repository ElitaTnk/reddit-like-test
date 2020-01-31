import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  data: [];
  constructor(public http: HttpClient) {}

  getPost(): Promise<any> {
    return this.http
      .get('//www.reddit.com/r/all/top.json?limit=50')
      .pipe(
        catchError(err => throwError(err)),
        map((response: any) => {
          return this.data = response.data.children.map(item => item.data);
        }),
      ).toPromise();
  }
}
