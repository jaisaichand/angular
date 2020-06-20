import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cam-mic';
constructor(public renderer:Renderer2){}
  photosArray = [];

   // toggle webcam on/off
   public showWebcam = true;
   public allowCameraSwitch = false;
   public multipleWebcamsAvailable = false;
   public deviceId: string;
   public videoOptions: MediaTrackConstraints = {
     // width: {ideal: 1024},
     // height: {ideal: 576}
   };

   public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();

  @ViewChild('inp') inp:ElementRef;
  @ViewChild('ep') ep:ElementRef;
ngOnInit(){
  WebcamUtil.getAvailableVideoInputs()
  .then((mediaDevices: MediaDeviceInfo[]) => {
    this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
  });
}

public triggerSnapshot(): void {
  this.trigger.next();
  this.photosArray.push(this.webcamImage.imageAsDataUrl);
  console.log(this.webcamImage);
  console.log("Photo array first",this.photosArray[0]);
}

public toggleWebcam(): void {
  this.showWebcam = !this.showWebcam;
}

public handleInitError(error: WebcamInitError): void {
  this.errors.push(error);
}

public showNextWebcam(directionOrDeviceId: boolean|string): void {
  // true => move forward through devices
  // false => move backwards through devices
  // string => move to device with given deviceId
  this.nextWebcam.next(directionOrDeviceId);
}

public handleImage(webcamImage: WebcamImage): void {
  console.info('received webcam image', webcamImage);
  this.webcamImage = webcamImage;
}

public cameraWasSwitched(deviceId: string): void {
  console.log('active device: ' + deviceId);
  this.deviceId = deviceId;
}

public get triggerObservable(): Observable<void> {
  return this.trigger.asObservable();
}

public get nextWebcamObservable(): Observable<boolean|string> {
  return this.nextWebcam.asObservable();
}

hexFin = '&#x231A;';
decimalToHexString(number)
{
  if (number < 0)
  {
    number = 0xFFFFFFFF + number + 1;
    console.log(number);
    this.hexFin =  number;
  }
  this.hexFin =  number.toString(16).toUpperCase();
  return number.toString(16).toUpperCase();

}
val1;
ins(num){
  //this.hexFin = this.decimalToHexString(num);
  let elem = this.renderer.createElement('span');
  //this.hexFin = '&#x'+this.hexFin+';';
  //this.renderer.appendChild(elem,this.ep);
  
  this.inp.nativeElement.value = this.inp.nativeElement.value + this.ep.nativeElement.outerText;
  this.val1 = this.inp.nativeElement.value;
  console.log(this.ep.nativeElement.outerText);
}

}
