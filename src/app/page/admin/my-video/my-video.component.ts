import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { VideoService } from 'src/app/service/video/video.service';

@Component({
  selector: 'app-my-video',
  templateUrl: './my-video.component.html',
  styleUrls: ['./my-video.component.css']
})
export class MyVideoComponent implements OnInit {
  userId: string;
  videoList: any;
  categoryName1: any;
  constructor(private videoService: VideoService, private authServie: AuthService) { }

  ngOnInit() {
    this.userId = this.authServie.user.email;
    this.videoService.getMyVideos(this.userId).subscribe(videos => {
      console.log(videos);
      this.videoList = videos;
    });
  }

}
