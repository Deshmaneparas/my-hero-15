import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HerosComponent } from './heros/heros.component';
import { HEROES } from './mock-heroes';

@Component({
  standalone:true,
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[HerosComponent,CommonModule,HeroDetailComponent],
})
export class AppComponent implements OnInit {
  // username:string="hiii";
  // phone:string="8234673441";
  // age:number=23;
  // photo:string="https://www.thedrive.com/content/2018/09/img_0199.jpg?quality=85&crop=16%3A9&auto=webp&optimize=high&quality=70&width=1440"
  title = 'Tour of Heroes';
  // heroes=HEROES;
  
  

  constructor() { }

  ngOnInit() {
  }

}