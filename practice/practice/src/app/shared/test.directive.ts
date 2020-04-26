import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appTest]'
})
export class TestDirective {

    constructor(private el: ElementRef , private renderer: Renderer2) {
        // renderer.setStyle(el, 'background', 'red');
        this.changeBg('orange');
    }

    @HostBinding('style.color') textColor: string;

    changeBg(color: string) {
        this.renderer.setStyle(this.el.nativeElement, 'background', color);
    }

    @HostListener('mouseover') onMouseOver() {
        this.renderer.removeStyle(this.el.nativeElement, 'background');
        this.renderer.setStyle(this.el.nativeElement, 'background', 'green');
        this.textColor = 'white';
    }

    @HostListener('mouseout') onMouseOut() {
        this.renderer.removeStyle(this.el.nativeElement, 'background');
        this.renderer.setStyle(this.el.nativeElement, 'background', 'orange');
        this.textColor = 'black';
    }
}
