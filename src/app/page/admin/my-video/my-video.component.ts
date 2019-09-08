import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-video',
  templateUrl: './my-video.component.html',
  styleUrls: ['./my-video.component.css']
})
export class MyVideoComponent implements OnInit {

  videoList1: any;
  categoryName1: any;
  constructor() { }

  ngOnInit() {
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
