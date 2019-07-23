import {RouterModule, Routes} from '@angular/router';
import {VideoComponent} from './page/video/detail/video/video.component';

const appRoutes: Routes = [
    {path: 'video/detail', component: VideoComponent},
];

export default RouterModule.forRoot(appRoutes)
