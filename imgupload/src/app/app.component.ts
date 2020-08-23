import { Component, EventEmitter } from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';

function readBase64(file): Promise<any> {
  const reader  = new FileReader();
  const future = new Promise((resolve, reject) => {
    reader.addEventListener('load', () => {
      resolve(reader.result);
    }, false);

    reader.addEventListener('error', (event) => {
      reject(event);
    }, false);

    reader.readAsDataURL(file);
  });
  return future;
}

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imgupload';

  afuConfig = {
    multiple: true,
    formatsAllowed: '.jpg,.png',
    maxSize: '4',
    uploadAPI:  {
      url: 'https://example-file-upload-api',
      method: 'POST',
      headers: {
     'Content-Type' : 'text/plain;charset=UTF-8',
     Authorization : `Bearer 'kjh'`
      },
      params: {
        page: '1'
      },
      responseType: 'blob',
    },

    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',

      attachPinBtn: 'Attach Files...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: '4'
    }
};



public uploader: FileUploader = new FileUploader({
  url: URL,
  disableMultipart: true
  });
public hasBaseDropZoneOver = false;
public hasAnotherDropZoneOver = false;

fileObject: any;


public fileOverBase(e: any): void {
  this.hasBaseDropZoneOver = e;
}

public fileOverAnother(e: any): void {
  this.hasAnotherDropZoneOver = e;
}

public onFileSelected(event: EventEmitter<File[]>) {
  const file: File = event[0];

  console.log(file);

  readBase64(file)
    .then( (data) => {
    console.log(data);
  });

}

}
