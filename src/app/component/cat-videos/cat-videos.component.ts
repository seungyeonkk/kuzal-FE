import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-cat-videos',
    templateUrl: './cat-videos.component.html',
    styleUrls: ['./cat-videos.component.css']
})
export class CatVideosComponent implements OnInit {

    @Input() videoList: any;  // 비디오 목록
    @Input() categoryName: string; // 카테고리 명


    constructor(private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
      //  console.log('video list ', this.videoList);
      //  console.log('category name ', this.categoryName);

    }

    // video 상세화면 이동
    goVideoDetail(data): void {
        console.log("test", data);
        this.router.navigate(['videos/get/' + data._id], { relativeTo: this.route });

    }

}
