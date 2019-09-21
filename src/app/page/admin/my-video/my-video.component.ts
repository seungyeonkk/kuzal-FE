import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { VideoService } from 'src/app/service/video/video.service';

@Component({
  selector: 'app-my-video',
  templateUrl: './my-video.component.html',
  styleUrls: ['./my-video.component.css']
})
export class MyVideoComponent implements OnInit {
  userId: String;
  videoList1: any;
  categoryName1: any;
  constructor(private videoService: VideoService, private authServie: AuthService) { }

  ngOnInit() {
    this.userId = this.authServie.user.email;
    this.videoService.getMyVideos(this.userId).subscribe(video => {
      console.log(video);
    });
    this.categoryName1 = 'TWICE';
      this.videoList1 = [
        {
            thumbnailUrl : '../../../assets/img/thumbnail.png'
            , title : '사나는 여신이야'
            , userId : '김사나'
            , views : '20만회'

        },
        {
            thumbnailUrl : '../../../assets/img/thumbnail.png'
            , title : '사나는 여신이야'
            , userId : '김사나'
            , views : '20만회'

        },
        {
            thumbnailUrl : '../../../assets/img/thumbnail.png'
            , title : '사나는 여신이야'
            , userId : '김사나'
            , views : '20만회'

        },
        {
            thumbnailUrl : '../../../assets/img/thumbnail.png'
            , title : '사나는 여신이야'
            , userId : '김사나'
            , views : '20만회'

        },
        {
            thumbnailUrl : '../../../assets/img/thumbnail.png'
            , title : '사나는 여신이야'
            , userId : '김사나'
            , views : '20만회'

        },
        {
            thumbnailUrl : '../../../assets/img/thumbnail.png'
            , title : '사나는 여신이야'
            , userId : '김사나'
            , views : '20만회'

        }
    ];
  }

}
