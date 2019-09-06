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
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { LoginComponent } from './page/admin/login/login.component';
import { SideMenuComponent } from './page/layout/side-menu/side-menu.component';
import { UpdateComponent } from './page/video/update/update.component';
import { VideoUploadComponent } from './page/video/upload/video-upload/video-upload.component';
import { CatVideosComponent } from './component/cat-videos/cat-videos.component';

const firebaseConfig = {
    apiKey: 'AIzaSyAQoyIbH0kevq3bVEvIwhYQaKMbj2B1WWA',
    authDomain: 'kuzalcompetiton.firebaseapp.com',
    databaseURL: 'https://kuzalcompetiton.firebaseio.com',
    projectId: 'kuzalcompetiton',
    storageBucket: '',
    messagingSenderId: '182676330918',
    appId: '1:182676330918:web:a6bd8d0a7c30746f'
};

@NgModule({
    declarations: [
        AppComponent,
        VideoFileComponent,
        VideoComponent,
        VideoListComponent,
        FooterComponent,
        HeaderComponent,
        MainComponent,
        UpdateComponent,
        LoginComponent,
        SideMenuComponent,
        VideoUploadComponent,
        CatVideosComponent
    ],
    imports: [
        BrowserModule
        , BrowserAnimationsModule
        , HttpClientModule
        , FormsModule
        , ReactiveFormsModule
        , MyRoutes
        , AngularFireModule.initializeApp(firebaseConfig)
        , AngularFireAuthModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
