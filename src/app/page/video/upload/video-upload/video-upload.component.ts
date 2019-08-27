import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VideoService } from 'src/app/service/video/video.service';
import { RestService } from 'src/app/service/rest-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.css']
})

export class VideoUploadComponent{
  

  flag: any = {
    upload: false
  };

  video: any = {
      title: ''
      , description: ''
      , userId: 'test123'
      , videoFile: null
      , thumnailFile: null
      , regDate: '2019-08-18'
  };
  
  constructor(private restService: RestService, private http: HttpClient) { }

  ngOnInit() {

  }

  onVideoFileChange(files: FileList) {
      if (files && files.length > 0) {
      this.video.videoFile = files[0];
      }
  }

  onThumnailFileChange(files: FileList) {
      if (files && files.length > 0) {
          this.video.thumnailFile = files[0];
      }
  }

  // video upload
  uploadVideo(): void {
    this.flag.upload = true;

    const formData: FormData = new FormData();
    formData.append('title', this.video.title);
    formData.append('userId', this.video.userId);
    formData.append('regDate', this.video.regDate);
    formData.append('description', this.video.description);
    formData.append('videoFile', this.video.videoFile);
    formData.append('thumnailFile', this.video.thumnailFile);

    this.restService.postDataByFile('/videos/upload', formData).subscribe(res => {
        console.log(res);
        this.flag.upload = false;
        if (res.result === 'Success') {
            // TODO 동영상 업로드 목록으로 이동 (회원 마이페이지)
        }
    }, error => {
        this.flag.upload = false;
    });
  }
}
