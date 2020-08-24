import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.scss']
})
export class ChildoneComponent implements OnInit {
  @Input() parentData: string;

  constructor() { }



  ngOnInit() {
  }



}
