import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    selector: 'app-alert'
})
export class AlertComponent {
@Input() message: string;
@Output() closeThis = new EventEmitter<void>();

onClose() {
    this.closeThis.emit();
}
}
