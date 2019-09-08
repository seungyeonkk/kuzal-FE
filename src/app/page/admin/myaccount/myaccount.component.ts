import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../service/auth.service';
import {RestService} from '../../../service/rest-service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
    nickName: string;
  constructor(private authService: AuthService, private restService: RestService) { }

  updateUser() {
      console.log(this.nickName)
      // this.authService.updateUser(this.nickName).subscribe(params => console.log(params));
  }
  ngOnInit() {
  }

}
