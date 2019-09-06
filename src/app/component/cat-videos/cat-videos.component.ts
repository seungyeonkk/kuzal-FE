import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-cat-videos',
    templateUrl: './cat-videos.component.html',
    styleUrls: ['./cat-videos.component.css']
})
export class CatVideosComponent implements OnInit {

    @Input() videoList: any;
    @Input() categoryName: string;


    constructor() {
    }

    ngOnInit() {
        console.log('video list ', this.videoList);
        console.log('category name ', this.categoryName);

    }

    // video 상세화면 이동
    goVideoDetail(): void {

    }

}
