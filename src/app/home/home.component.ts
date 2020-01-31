import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  data: [] = [];
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.homeService.getPost().then(response => {
      this.data = response;
    });
  }

}
