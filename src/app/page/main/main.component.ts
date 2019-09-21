import { Component, OnInit } from '@angular/core';
import {RestService} from '../../service/rest-service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {VideoService} from '../../service/video/video.service';
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


    mainDatas: any = [];

  constructor(private restService: RestService, private http: HttpClient, private videoService: VideoService) { }

  ngOnInit() {

      this.getVideosByCategory();
  }

    // 카테고리별 비디오 목록 조회
    getVideosByCategory(): void {
        this.videoService.getCategorys().subscribe(response => {
            let categorys = response;
            for(let i in categorys) {
                let data = {
                    catTitle : categorys[i].title
                    , videos : []
                };

                this.videoService.getVideosByCategory(categorys[i].catId).subscribe(videos => {
                    data.videos = videos;
                    this.mainDatas.push(data);
                    console.log(this.mainDatas);
                });
            }
        });

    }


}
