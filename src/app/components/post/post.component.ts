import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input()
  item;

  @Input()
  index;

  @Output()
  seeDetail: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  removeItem: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendDetail(item): void {
    this.seeDetail.emit(item);
  }

  dismissOne(index): void {
    this.removeItem.emit(index);
  }

}
