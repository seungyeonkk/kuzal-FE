import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from './material/material.module';
import MyRoutes from './app.routes';

import {AppComponent} from './app.component';
import {VideoFileComponent} from './video-file/video-file.component';
import {VideoComponent} from './page/video/detail/video/video.component';
import { FooterComponent } from './page/layout/footer/footer.component';


@NgModule({
    declarations: [
        AppComponent,
        VideoFileComponent,
        VideoComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule
        , BrowserAnimationsModule
        , MaterialModule
        , HttpClientModule
        , FormsModule
        , ReactiveFormsModule
        , MyRoutes //routing 설정 파일
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
