import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class FileUploadService {
    constructor(public httpClient: HttpClient) {}

    fileObs = new Subject();
    postFile(fileToUpload: File) {
        const endpoint = 'your-destination-url';
        const formData: FormData = new FormData();
        formData.append('fileKey', fileToUpload, fileToUpload.name);
        console.log('form data is', formData );
        this.fileObs.next(fileToUpload);
        // return fileToUpload.name;
    }
}
