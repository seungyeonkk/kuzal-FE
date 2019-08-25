import { Injectable } from '@angular/core';
import { RestService } from '../rest-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(
    private restService: RestService) {
  }  

  uploadVideo(data: any):Observable<any> {
    return this.restService.postData("/videos/upload",data);
  }
}
