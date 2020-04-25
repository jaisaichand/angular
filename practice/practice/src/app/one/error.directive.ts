import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
selector: '[appError]'
})
export class ErrorDirective implements OnInit {

    // tslint:disable-next-line: no-input-rename
    @Input('appError') highColor: string;

    constructor(private el: ElementRef) {
        el.nativeElement.style.background = this.highColor;
        console.log(this.highColor);
    }

    ngOnInit() {
        this.el.nativeElement.style.background = this.highColor;
        console.log(this.highColor);
    }

}
