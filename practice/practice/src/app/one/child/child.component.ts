import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, AfterContentInit,
  AfterViewInit, Renderer2, ContentChild } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input() pMessage;
  shout = 'I am shouting';
  specialSecret = 'This is a secret messege';
  @Output() shouting = new EventEmitter();
  cHeader = 'This is card header';
  cFooter = 'This is card footer';
  unchanged: string;


  val2: Renderer2;

  @ViewChild('one', {static: false }) one: ElementRef;

  @ViewChild('two', {static: false}) two: ElementRef;

  constructor() { }

  ngOnInit() {
    this.shouting.emit(this.shout);
  }

  ngAfterViewInit() {
    console.log( ' This is an element ' + this.one.nativeElement.innerHTML);
    console.log( ' This is an element ' + this.two.nativeElement.innerHTML);


  }

  ngAfterContentInit() {

  }

}
