import { Component, OnInit } from '@angular/core';
import { JaiService } from '../jai.service';

@Component({
  selector: 'app-happy',
  templateUrl: './happy.component.html',
  styleUrls: ['./happy.component.scss']
})
export class HappyComponent implements OnInit {
  name = true;
  fot = 'aklsdjfdfjkh';
  constructor(private jai: JaiService) { }



  ngOnInit() {
    this.jai.messege = this.fot;
  }

}
