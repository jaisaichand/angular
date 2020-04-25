import { Component, OnInit, Input, ElementRef, AfterViewInit, ViewChild, ContentChild, AfterContentInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit, AfterViewInit, AfterContentInit {

  isTrue: boolean;
  list1 = ['hello', 'there', 'this is', 'Jai'];
  messege = 'Hello bitch!';
  shout1: Event;
  hell;
  kill;
  well;
  hul = 'hello hul';
  @ContentChild(ChildComponent, {static: false}) child2: ChildComponent;

  // tslint:disable-next-line: no-input-rename
  @ViewChild(ChildComponent, {static: false}) childComponentRef: ChildComponent;

  @ViewChild('textbx', {static: true}) textbox: ElementRef;

  constructor() {

   }

  ngOnInit() {
    this.isTrue = true;
    this.fun1();
    console.log(this.childComponentRef);


  }

  ngAfterContentInit() {
    this.child2.unchanged = 'fill you';
    console.log('...' + this.child2.unchanged);
  }

  ngAfterViewInit() {
    this.hell = this.childComponentRef;
    console.log(this.childComponentRef);
    console.log(this.textbox.nativeElement);

  }
fun1() {
  setInterval( () => { this.isTrue = !this.isTrue;  } , 1000);
}

fun2(e: Event) {
  // console.log(e);
  this.shout1 = e;
}
}
