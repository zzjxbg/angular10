import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  title:any="我是首页";
  category:any="category home";

  constructor() { }

  ngOnInit(): void {
  }

  homeWork() {
    console.log("我是父组件home的homeWork");
  }


}
