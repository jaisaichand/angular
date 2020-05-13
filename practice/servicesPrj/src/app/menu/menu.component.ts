import { Component, OnInit } from '@angular/core';
import { JaiService } from '../jai.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  fot;
  constructor(private jai: JaiService) { }

  ngOnInit() {
    this.fot = this.jai.messege;
  }

}
