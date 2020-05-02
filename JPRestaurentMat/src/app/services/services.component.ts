import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
    selector: 'app-selector',
    templateUrl: 'services.component.html'
})
export class ServicesComponent {

    constructor(private service: AppService) {}
    tabColor() {
        return this.service.tabColor;
    }
}
