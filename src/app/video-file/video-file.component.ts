import { Component, OnInit } from '@angular/core';
import { RestService } from '../service/rest-service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-video-file',
  templateUrl: './video-file.component.html',
  styleUrls: ['./video-file.component.css']
})
export class VideoFileComponent implements OnInit {

   public form: FormGroup;
    loading = false;
    result: any = {};


  constructor(private restService: RestService,  private fb: FormBuilder, private http: HttpClient) {

      this.form = this.fb.group({
          file: ['', Validators.required]
      });
  }

  ngOnInit() {

      this.test();
  }

    onFileChange(files: FileList) {
        if (files && files.length > 0) {
            const file = files[0];
            this.avatar.setValue(file.name);
        }
    }

    onSubmit(files: FileList) {
        const formData = new FormData();
        formData.append('file', files[0]);

        this.loading = true;
        // Send data (payload = formData)
        console.log(formData.get('file'));

        // 폼데이터를 서버로 전송한다.
        this.http.post('http://localhost:8081/api/files/upload', formData)
            .subscribe(res => {
                console.log("result", res);
                this.result = res;
                this.loading = false;
                this.avatar.setValue(null);
            });

        console.log(formData);
    }

    get avatar() {
        return this.form.get('file');
    }

    test(): void {

     /* this.restService.getData('/health').subscribe((response: {}) => {
          onsole.log(response);
      });*/




      // memberService.getProfile() > restService.getData("/asda")
         /// e/e//



    }

}
