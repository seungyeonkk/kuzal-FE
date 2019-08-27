import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../service/auth.service';
import {RestService} from '../../../service/rest-service';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    userDetails: any;
    responseMessageType = '';
    responseMessage = '';


    constructor(private authService: AuthService, private restService: RestService, private httpClient: HttpClient) {
    }

    showMessage(type, msg) {
        this.responseMessageType = type;
        this.responseMessage = msg;
        setTimeout(() => {
            this.responseMessage = '';
        }, 2000);
    }

    isUserLogin() {
        this.userDetails = this.authService.isUserLoggedIn();
    }

    logoutUser() {
        this.authService.logout()
            .then(res => {
                console.log(res);
                this.userDetails = undefined;
                localStorage.removeItem('user');
            }, err => {
                this.showMessage('danger', err.message);
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
                this.showMessage('danger', err.message);
            });
    }

    ngOnInit() {
    }

}
