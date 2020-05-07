import { Injectable } from '@angular/core';
import { MenuItem } from '../shared/menu-item.model';
import { Subject } from 'rxjs';
import { AppService } from '../app.service';

@Injectable({
    providedIn: 'root'
})
export class MenuService {


    constructor(private appService: AppService) {}

    totalMenu;

}

// Solely developed by jai sai chand(t.jaisaichand4@gmail.com)
