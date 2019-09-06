import { Component, OnInit } from '@angular/core';
import {RestService} from '../../service/rest-service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    videoList1: any;
    categoryName1: any;
    videoList2: any;
    categoryName2: any;

  constructor(private restService: RestService, private http: HttpClient) { }

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
      this.categoryName2 = '장만월';
      this.videoList2 = [
          {
              thumbnailUrl : '../../../assets/img/iu.png'
              , title : '장만월 예뻐요'
              , userId : '구찬성'
              , views : '11만회'

          },
          {
              thumbnailUrl : '../../../assets/img/iu.png'
              , title : '장만월 예뻐요'
              , userId : '구찬성'
              , views : '11만회'

          },
          {
              thumbnailUrl : '../../../assets/img/iu.png'
              , title : '장만월 예뻐요'
              , userId : '구찬성'
              , views : '11만회'

          },
          {
              thumbnailUrl : '../../../assets/img/iu.png'
              , title : '장만월 예뻐요'
              , userId : '구찬성'
              , views : '11만회'

          },
          {
              thumbnailUrl : '../../../assets/img/iu.png'
              , title : '장만월 예뻐요'
              , userId : '구찬성'
              , views : '11만회'

          },
          {
              thumbnailUrl : '../../../assets/img/iu.png'
              , title : '장만월 예뻐요'
              , userId : '구찬성'
              , views : '11만회'

          }
      ];
  }




}
