import { Component, OnInit } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-audio-comp',
  templateUrl: './audio-comp.component.html',
  styleUrls: ['./audio-comp.component.scss']
})
export class AudioCompComponent implements OnInit {

 

  ngOnInit(): void {
  }
  
// testVidUrl and url are the variables in which audio is saved
testVidUrl;

  // ==============

  private record;
  //Will use this flag for detect recording
   recording = false;
  //Url of Blob
   url;
   error;
  constructor(private domSanitizer: DomSanitizer) {
  }
  sanitize(url:string){
      return this.domSanitizer.bypassSecurityTrustUrl(url);
  }
  /**
   * Start recording.
   */
  initiateRecording() {
      
      this.recording = true;
      let mediaConstraints = {
          video: false,
          audio: true
      };
      navigator.mediaDevices
          .getUserMedia(mediaConstraints)
          .then(this.successCallback.bind(this), this.errorCallback.bind(this));
          console.log(this);
  }
  /**
   * Will be called automatically.
   */
  successCallback(stream) {
      var options = {
          mimeType: "audio/wav",
          numberOfAudioChannels: 1
      };
      //Start Actuall Recording
      var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
      this.record = new StereoAudioRecorder(stream, options);
      this.record.record();
  }
  /**
   * Stop recording.
   */
  stopRecording() {
      this.recording = false;
      this.record.stop(this.processRecording.bind(this));
  }
  /**
   * processRecording Do what ever you want with blob
   * @param  {any} blob Blog
   */
  processRecording(blob) {
      this.url = URL.createObjectURL(blob);
      console.log(this.url);
      this.testVidUrl = this.url;
  }
  /**
   * Process Error.
   */
  errorCallback(error) {
      this.error = 'Can not play audio in your browser';
  }
}
