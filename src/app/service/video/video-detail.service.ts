import {Injectable} from '@angular/core';
import {RestService} from '../rest-service';
import {Observable} from 'rxjs';
import Video from '../../model/video';

@Injectable({
    providedIn: 'root'
})
export class VideoDetailService {

    constructor(
        private restService: RestService) {
    }

    getVideo(id: string): Observable<Video> {
        return this.restService.getData('/video/', id);
    }
}
