import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parentone',
  templateUrl: './parentone.component.html',
  styleUrls: ['./parentone.component.scss']
})
export class ParentoneComponent implements OnInit {

  constructor() { }
  initialText = 'ammababoi ismart shankar';

  @Output() dataa = new EventEmitter();

  ngOnInit() {
  }

  clicked() {
    this.initialText = this.initialText + this.initialText;
    this.dataa.emit(this.initialText);
  }

}
