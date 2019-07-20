import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule} from './material/material.module';
import { VideoFileComponent } from './video-file/video-file.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VideoFileComponent
  ],
  imports: [
    BrowserModule
    , BrowserAnimationsModule
    , MaterialModule
    , HttpClientModule
      , FormsModule
      , ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
