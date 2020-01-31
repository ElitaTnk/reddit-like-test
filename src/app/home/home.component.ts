import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Observable, of } from 'rxjs';
import {
  trigger, state, transition, animate, style
} from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ])
  ]
})
export class HomeComponent implements OnInit {
  data: object[] = [];
  detail: object;
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.homeService.getPost().then(response => {
      this.data = response;
    });
  }

  sentDetail(item): void {
    this.detail = item;
    const idx = this.data.findIndex((post: any) => post.id === item.id);
    /* tslint:disable:no-string-literal */
    this.data[idx]['status'] = 'read';
    /* tslint:enable:no-string-literal */
  }

  dismissAll(): void {
    this.data = [];
  }

  dismissOne(index): void {
    const idx = this.data.findIndex((item: any) => item.id === index.id);
    this.homeService.getNextPost().then(response => {
      this.data.splice(idx, 1, response[0]);
    });
  }

}
