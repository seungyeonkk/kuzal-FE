import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VideoService } from 'src/app/service/video/video.service';
import { RestService } from 'src/app/service/rest-service';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.css']
})

export class VideoUploadComponent{
  
  imageSrc = '/assets/images/john-resig.jpeg';
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
  
  constructor(private restService: RestService, private http: HttpClient, private spinner: NgxSpinnerService, private router: Router) { }

  ngOnInit() {
    // /** spinner starts on init */
    // this.spinner.show();

    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    // }, 5000);
    this.imageSrc = "https://img.icons8.com/ios/50/000000/xbox-x.png";
  }

  onVideoFileChange(files: FileList) {
      if (files && files.length > 0) {
      this.video.videoFile = files[0];
      console.log(this.video.videoFile.name)
      }
  }

  onThumnailFileChange(files: FileList) {
      if (files && files.length > 0) {
          this.video.thumnailFile = files[0];
          const reader = new FileReader();

      /* 브라우저는 보안 문제로 인해 파일 경로의 참조를 허용하지 않는다.
        따라서 파일 경로를 img 태그에 바인딩할 수 없다.
        FileReader.readAsDataURL 메소드를 사용하여 이미지 파일을 읽어
        base64 인코딩된 스트링 데이터를 취득한 후, img 태그에 바인딩한다. */
      reader.readAsDataURL(this.video.thumnailFile);
      reader.onload = () => {
        this.imageSrc = reader.result;
      };
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

    this.spinner.show();
    this.restService.postDataByFile('/videos/upload', formData).subscribe(res => {
        console.log(res);
        this.flag.upload = false;
        if (res.result === 'Success') {
            this.spinner.hide();
            // TODO 동영상 업로드 목록으로 이동 (회원 마이페이지)
            this.router.navigateByUrl('/uploadCompleted');
        }
    }, error => {
        this.flag.upload = false;
    });
  }
}
