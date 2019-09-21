import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    mainWidth: any; // 메인 화면 넓이


  constructor() {

  }

  ngOnInit() {
    this.mainWidth = window.innerWidth - 250;
  }




}
