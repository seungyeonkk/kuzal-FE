import { Injectable } from '@angular/core';
import {auth, User} from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  constructor(public afAuth: AngularFireAuth) {
      this.afAuth.authState.subscribe(user => {
          if (user) {
              this.user = user;
              localStorage.setItem('user', JSON.stringify(this.user));
          } else {
              localStorage.setItem('user', null);
          }
      });
  }


  async loginWithGoogle() {
      return await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  isUserLoggedIn() {
      return JSON.parse(localStorage.getItem('user'));
  }

  async logout() {
      return await this.afAuth.auth.signOut();
  }

}
