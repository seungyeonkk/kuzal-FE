import {Routes} from '@angular/router';
import {VideoComponent} from './page/video/detail/video/video.component';



export const routes: Routes = [
    { path: 'videos/:id', component: VideoComponent }
]
