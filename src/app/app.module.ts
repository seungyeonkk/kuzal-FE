import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { VideoListComponent } from './video-list/video-list.component';
import MyRoutes from './app.routes';

import {AppComponent} from './app.component';
import {VideoFileComponent} from './video-file/video-file.component';
import {VideoComponent} from './page/video/detail/video/video.component';
import {FooterComponent} from './page/layout/footer/footer.component';
import { HeaderComponent } from './page/layout/header/header.component';
import { MainComponent } from './page/main/main.component';
import { SideMenuComponent } from './page/layout/side-menu/side-menu.component';
import { VideoUploadComponent } from './page/video/upload/video-upload/video-upload.component';


@NgModule({
    declarations: [
        AppComponent,
        VideoFileComponent,
        VideoComponent,
        VideoListComponent,
        FooterComponent,
        HeaderComponent,
        MainComponent,
        SideMenuComponent,
        VideoUploadComponent
    ],
    imports: [
        BrowserModule
        , BrowserAnimationsModule
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
