import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    public location: Location
  ) { }

  ngOnInit() {
  }

  back():void{
    this.location.back();
  }
}
