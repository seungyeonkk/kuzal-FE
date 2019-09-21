import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../service/auth.service';
import {VideoService} from '../../../service/video/video.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

    categorys: any;

    constructor(private authService: AuthService, private videoService: VideoService) {
  }
  ngOnInit() {
    this.getCategorys();
  }


  // 카테고리 목록 조회
  getCategorys(): void {
      this.videoService.getCategorys().subscribe(response => {
          this.categorys = response;
      });
  }

}
