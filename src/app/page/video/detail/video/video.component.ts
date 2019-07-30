import {Component, Input, OnInit} from '@angular/core';
import {VideoDetailService} from '../../../../service/video/video-detail.service';
import {ActivatedRoute} from '@angular/router';
import VideoModule from '../../../../model/video';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.css']
})
/** 5d3e96c56257691dd99625f3 **/
export class VideoComponent implements OnInit {
    @Input() video: VideoModule = new VideoModule();

    constructor(
        private route: ActivatedRoute,
        private videoDetailService: VideoDetailService
    ) {
    }

    ngOnInit() {
        this.getVideo();
    }

    getVideo(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.videoDetailService.getVideo(id)
            .subscribe(video => this.video = video);
    }

}
