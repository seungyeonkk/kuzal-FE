import {Injectable} from '@angular/core';
import {RestServiceService} from '../rest-service.service';
import {Observable} from 'rxjs';
import Video from '../../module/video';

@Injectable({
    providedIn: 'root'
})
export class VideoDetailService {

    constructor(
        private restService: RestServiceService) {
    }

    getVideo(id: string): Observable<Video> {
        return this.restService.getData('/video/' + id);
    }
}
