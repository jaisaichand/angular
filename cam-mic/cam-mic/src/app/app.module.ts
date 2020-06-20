import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import {WebcamModule} from 'ngx-webcam';



import { AppComponent } from './app.component';
import { AudioCompComponent } from './audio-comp/audio-comp.component';
import { RecordRtcComponent } from './audio-comp/record-rtc/record-rtc.component';
import { AudioRecordingService } from './audio-comp/record-rtc/audioRecording.service';

@NgModule({
  declarations: [
    AppComponent,
    AudioCompComponent,
    RecordRtcComponent
  ],
  imports: [
    BrowserModule, WebcamModule, FormsModule
  ],
  providers: [AudioRecordingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
