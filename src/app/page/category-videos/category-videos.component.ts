import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VideoService} from '../../service/video/video.service';

@Component({
  selector: 'app-category-videos',
  templateUrl: './category-videos.component.html',
  styleUrls: ['./category-videos.component.css']
})
export class CategoryVideosComponent implements OnInit {

    catId: string;
    videos: any;

  constructor(private route: ActivatedRoute,
              private videoService: VideoService) {

  }

  ngOnInit() {

      this.route.params.subscribe(routeParams => {
          this.catId = routeParams.id;
          this.getVideosByCategory();
      });
  }

    // 카테고리별 비디오 목록 조회
    getVideosByCategory(): void {

        this.videoService.getVideosByCategory(this.catId).subscribe(videos => {
            this.videos = videos;
        });

    }


}
