import {Component, Input, OnInit} from '@angular/core';
import {VideoService} from '../../../../service/video/video.service';
import {ActivatedRoute} from '@angular/router';
import VideoModule from '../../../../model/video';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.css']
})

export class VideoComponent implements OnInit {

    private videoId: string;

    constructor(private route: ActivatedRoute, private videoService: VideoService) {
        this.videoId = route.snapshot.paramMap.get('id');
        console.log(this.videoId);
    }

    @Input() video: VideoModule = new VideoModule();


    ngOnInit() {
        this.getVideo();
    }

    getVideo(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.videoService.getVideo(id)
            .subscribe(video => this.video = video);
    }
}
