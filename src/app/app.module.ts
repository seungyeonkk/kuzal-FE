import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule} from './material/material.module';
import { VideoFileComponent } from './video-file/video-file.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideoComponent } from './page/video/detail/video/video.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: 'video/detail', component: VideoComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    VideoFileComponent,
    VideoComponent
  ],
  imports: [
      RouterModule.forRoot(
          appRoutes
      ),
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
