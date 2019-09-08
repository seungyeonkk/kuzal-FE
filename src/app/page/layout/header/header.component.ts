import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../service/auth.service';
import {RestService} from '../../../service/rest-service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    private isUser: boolean;
    private userDetails: any;

  constructor(private authService: AuthService, private restService: RestService, private httpClient: HttpClient) {

      if (authService.isUserLoggedIn() != null) {
          this.isUser = true;
      } else {
          this.isUser = false;
      }
  }
    isUserLogin() {
        this.userDetails = this.authService.isUserLoggedIn();
        this.isUser = true;
    }

    logoutUser() {
        this.authService.logout()
            .then(res => {
                console.log(res);
                this.isUser = false;
                this.userDetails = undefined;
                localStorage.removeItem('user');
            }, err => {
                console.log(err);
            });
    }


    googleLogin() {
        this.authService.loginWithGoogle()
            .then(res => {
                console.log(res);
                this.isUserLogin();
                const loginRequest = {'email': this.userDetails.email, 'displayName': this.userDetails.displayName};
                this.httpClient.post('http://localhost:8081/users/login', loginRequest)
                    .subscribe(abc => {
                        console.log(abc);
                    });
            }, err => {
                console.log(err);
            });
    }

  ngOnInit() {
  }

}
