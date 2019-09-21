import { Injectable } from '@angular/core';
import { RestService } from '../rest-service';
import { Observable } from 'rxjs';
import Video from '../../model/video';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private restService: RestService) {

  }
    uploadVideo(data: any): Observable<any> {
        return this.restService.postData('/videos/upload', data);
    }

    getVideo(id: string): Observable<Video> {
        return this.restService.getData('/videos/get/' + id);
    }

    getMyVideos(userId: String): Observable<Video> {
      return this.restService.getData('/videos/my/' + userId);
    }

    updateVideo(video: string): Observable<string> {
        return this.restService.postData('/videos/update', video);
    }
    updateVideoViews(video: string): Observable<string> {
        return this.restService.postData('/videos/views', video);
    }
    getMyLiked(liked: string): Observable<string> {
      return this.restService.postData('/videos/myLiked' , liked);
    }
    getVideoLiked(videoId: string): any {
        return this.restService.getData('/videos/liked/' + videoId);
    }
    updateVideoLiked(liked: string): Observable<string> {
      return this.restService.postData('/videos/liked', liked);
    }
}
