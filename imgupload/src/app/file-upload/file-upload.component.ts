import { Component, OnInit } from '@angular/core';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent implements OnInit {

  constructor(private fileUploadService: FileUploadService) { }
  fileToUpload: File = null;
  fileA;
  ngOnInit() {
    this.fileUploadService.fileObs.subscribe((succ) => {
      this.fileA = succ;
    } );
  }


  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

uploadFileToActivity() {
  this.fileUploadService.postFile(this.fileToUpload);
  console.log('file is', this.fileA);

}
}
