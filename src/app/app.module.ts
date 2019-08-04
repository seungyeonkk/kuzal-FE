import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { VideoListComponent } from './video-list/video-list.component';
import {MaterialModule} from './material/material.module';
import MyRoutes from './app.routes';

import {AppComponent} from './app.component';
import {VideoFileComponent} from './video-file/video-file.component';
import {VideoComponent} from './page/video/detail/video/video.component';
import {FooterComponent} from './page/layout/footer/footer.component';
import { HeaderComponent } from './page/layout/header/header.component';
import { MainComponent } from './page/main/main.component';


@NgModule({
    declarations: [
        AppComponent,
        VideoFileComponent,
        VideoComponent,
        VideoListComponent,
        FooterComponent,
        HeaderComponent,
        MainComponent
    ],
    imports: [
        BrowserModule
        , BrowserAnimationsModule
        , MaterialModule
        , HttpClientModule
        , FormsModule
        , ReactiveFormsModule
        , MyRoutes
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
