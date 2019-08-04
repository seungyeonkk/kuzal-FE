import {RouterModule, Routes} from '@angular/router';
import {VideoComponent} from './page/video/detail/video/video.component';
import {NgModule} from '@angular/core';
import {MainComponent} from './page/main/main.component';

const appRoutes: Routes = [
    {path: '', component: MainComponent},
    {path: 'videos/:id', component: VideoComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export default class AppRoutingModule {}
