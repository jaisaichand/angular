import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-containerone',
  templateUrl: './containerone.component.html',
  styleUrls: ['./containerone.component.scss']
})
export class ContaineroneComponent implements OnInit {

  dataToChild = 'Default data';

  constructor() { }

  ngOnInit() {
  }



  dataReceived(dat) {
    console.log(dat);
    this.dataToChild = dat;
  }

}
