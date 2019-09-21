import {RouterModule, Routes} from '@angular/router';
import {VideoComponent} from './page/video/detail/video/video.component';
import {NgModule} from '@angular/core';
import {MainComponent} from './page/main/main.component';
import {UpdateComponent} from './page/video/update/update.component';
import { VideoUploadComponent } from './page/video/upload/video-upload/video-upload.component';
import {VideoUploadCompletedComponent} from './page/video/video-upload-completed/video-upload-completed.component';
import {MyaccountComponent} from './page/admin/myaccount/myaccount.component';
import { MyVideoComponent } from './page/admin/my-video/my-video.component';

const appRoutes: Routes = [
    {path: '', component: MainComponent},
    {path: 'videos/update/:id', component: UpdateComponent},
    {path: 'videos/get/:id', component: VideoComponent},
    {path: 'upload', component: VideoUploadComponent},
    {path: 'uploadCompleted', component: VideoUploadCompletedComponent},
    {path: 'my-account', component: MyaccountComponent},
    {path: 'my-video', component: MyVideoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export default class AppRoutingModule {
}
