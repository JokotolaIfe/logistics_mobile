import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  published: boolean = false;
  elements: any = [0,0,0,0,0,0,0]
  constructor() { }

  ngOnInit() {
  }

  publish(){
    this.published = true;
  }
}
