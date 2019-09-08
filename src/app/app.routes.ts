import {RouterModule, Routes} from '@angular/router';
import {VideoComponent} from './page/video/detail/video/video.component';
import {NgModule} from '@angular/core';
import {MainComponent} from './page/main/main.component';
import {UpdateComponent} from './page/video/update/update.component';
import {LoginComponent} from './page/admin/login/login.component';
import {VideoUploadComponent} from './page/video/upload/video-upload/video-upload.component';
import {VideoUploadCompletedComponent} from './page/video/video-upload-completed/video-upload-completed.component';

const appRoutes: Routes = [
    {path: '', component: MainComponent},
    {path: 'videos/update/:id', component: UpdateComponent},
    {path: 'videos/get/:id', component: VideoComponent},
    {path: 'login', component: LoginComponent},
    {path: 'upload', component: VideoUploadComponent},
    {path: 'uploadCompleted', component:VideoUploadCompletedComponent},
    {path: 'my/account', component: VideoUploadComponent},
    {path: 'my/video', component: VideoUploadComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export default class AppRoutingModule {
}
