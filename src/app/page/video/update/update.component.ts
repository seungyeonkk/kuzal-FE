import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import VideoModule from '../../../model/video';
import {VideoService} from '../../../service/video/video.service';

@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

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

    updateVideo(): void {
        this.videoService.updateVideo(JSON.stringify(this.video))
            .subscribe(params => console.log(params));
    }
    textChange(param, text): void {
        param === 'title' ? this.video.title = text : this.video.description = text;
    }

}
