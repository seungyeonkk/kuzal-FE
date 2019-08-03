import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  private videoId: string;

  constructor(private route: ActivatedRoute) {
      this.videoId = route.snapshot.paramMap.get('id');
      console.log(this.videoId);
  }

  ngOnInit() {
  }

}
