import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VideoService } from 'src/app/service/video/video.service';

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.css']
})

export class VideoUploadComponent{
  

  video: any = {
    title : "",
    description: "",
    userId:"test1234",
    videoFile : null,
    thumnailFile: null,
    regDate: "2019-08-01"
  };


  constructor(private videoService: VideoService) {
    
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
    console.log(this.video);
    const formData = new FormData();
    formData.append('title',this.video.title);
    formData.append('description',this.video.description);
    formData.append('userId',this.video.userId);
    formData.append('thumnailFile',this.video.thumnailFile);
    formData.append('videoFile',this.video.videoFile);
    formData.append('regDate',this.video.regDate);

    this.videoService.uploadVideo(formData).subscribe(res => {
      console.log(res);
    });
  }
}
