import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang2';
  username = '';
  serverBoolean = false;
  resetUsr() {
    this.username = '';
    this.serverBoolean = false;
  }

  exec1() {
    this.serverBoolean = true;
  }

}
