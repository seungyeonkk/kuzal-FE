import {Component, OnInit} from '@angular/core';
import {VideoSample} from '../model/videoSample';
import {RestServiceService} from '../service/rest-service.service';

@Component({
    selector: 'app-video-list',
    templateUrl: './video-list.component.html',
    styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
    private videos: VideoSample[] = [];

    constructor(private restService: RestServiceService) {
        this.restService.getData('/videos').subscribe((res: VideoSample[]) => {
            this.videos = res;
        });

    }
    ngOnInit() {
    }

}
