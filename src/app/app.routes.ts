import {RouterModule, Routes} from '@angular/router';
import {VideoComponent} from './page/video/detail/video/video.component';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
    {path: 'video/:id', component: VideoComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export default class AppRoutingModule {}
