import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

element;
filesAr = [];
imagesAr = [];
finAr = [];

datUrl;
fileNamesArr = [];
imagesUrLArr = [];
@ViewChild('coreInp', {static: false}) coreInp: HTMLInputElement ;
  ngOnInit() {
    this.element = document.getElementById('coreInput') as HTMLElement;
  }

  uploadIt() {
    this.element.click();
  }

  onFileUpload(ev) {

    console.log(ev);
    console.log(ev.target.files[0]);
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0 ; i < ev.target.files.length; i++ ) {
      console.log(ev.target.files[i]);
      this.finAr.push(ev.target.files[i]);
      const reader = new FileReader();
      // tslint:disable-next-line: max-line-length
      if ((ev.target.files[i].type === 'image/png') || (ev.target.files[i].type === 'image/jpeg') || (ev.target.files[i].type === 'image/jpg')) {
        this.imagesAr.push(ev.target.files[i]);

         // pushing data urls
        let file: File = ev.target.files[i];

        reader.onload = (event) => {
        console.log(reader.result);
        this.datUrl = reader.result;
        console.log(this.datUrl);
        this.imagesUrLArr.push(this.datUrl);
     };
     // this.reader.readAsDataURL(file);
        this.datUrl = reader.readAsDataURL(file);

      } else {
        this.filesAr.push(ev.target.files[i]);
        this.fileNamesArr.push(ev.target.files[i].name);
      }

      console.log(this.filesAr);
      console.log(this.fileNamesArr);
      console.log(this.imagesAr);
      console.log(this.imagesUrLArr);
    }



  }

  viewImg() {

  }

  removeImg() {}

}
