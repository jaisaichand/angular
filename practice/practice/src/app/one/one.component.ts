import { Component, OnInit, Input, ElementRef, AfterViewInit, ViewChild,
   ContentChild, AfterContentInit, OnChanges, SimpleChanges } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit, AfterViewInit, AfterContentInit, OnChanges {

  isTrue: boolean;
  list1 = ['hello', 'there', 'this is', 'Jai'];
  messege = 'Hello bitch!';
  shout1: Event;
  hell;
  kill;
  well;
  hul = 'hello hul';
  subject1 = new Subject<Event>();
  @ViewChild('ref', {static: false}) refRef: ElementRef;
  // @ContentChild(ChildComponent, {static: false}) child2: ChildComponent;

  // tslint:disable-next-line: no-input-rename
  @ViewChild(ChildComponent, {static: false}) childComponentRef: ChildComponent;

  @ViewChild('textbx', {static: true}) textbox: ElementRef;
  @ContentChild('contentPara', {static: false}) contentPara: ElementRef;

  constructor() {
    console.log('constructor is done');
   }

   ngOnChanges(changes: SimpleChanges) {
     console.log('ng on changes');
     console.log(changes.currentValue);
     console.log(changes.previousValue);

   }

   onChange(e: Event) {
     this.subject1.next(e);
     console.log(e);
   }

  ngOnInit() {
    console.log('ngOninit is done');
    this.isTrue = true;
    this.fun1();
    console.log(this.childComponentRef);

  }

  ngAfterContentInit() {
    console.log('...' + this.contentPara.nativeElement.textContent);
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
