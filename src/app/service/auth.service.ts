import { Injectable } from '@angular/core';
import {auth, User} from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import {RestService} from './rest-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  isUser: boolean;
  constructor(public afAuth: AngularFireAuth, private restService: RestService) {
      this.afAuth.authState.subscribe(user => {
          if (user) {
              this.user = user;
              localStorage.setItem('user', JSON.stringify(this.user));
          } else {
              localStorage.setItem('user', null);
          }
      });
  }

  updateUser(nickName: string) {
      return this.restService.putData('/users/' + this.user.email, nickName);
  }

  async loginWithGoogle() {
      this.isUser = true;
      return await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  isUserLoggedIn() {
      return JSON.parse(localStorage.getItem('user'));
  }

  async logout() {
      this.isUser = false;
      return await this.afAuth.auth.signOut();
  }

}
