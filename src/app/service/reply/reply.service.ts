import { Injectable } from '@angular/core';
import {RestService} from '../rest-service';
import {Observable} from 'rxjs';
import Reply from '../../model/reply';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  constructor(private restService: RestService) { }

  getReplyVideoId(videoId: string): any {
       log('getReplyVideoId');
       return this.restService.getData('/replys/get/' + videoId);
  }
  addReply(reply: string): any {
      log('addReply' + reply);
      return this.restService.postData('/replys/add', reply);
  }
  deleteReply(replyId: string): Observable<string> {
      return this.restService.postData('/replys/delete', replyId);
  }
}
