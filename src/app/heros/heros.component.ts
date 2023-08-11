import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  standalone:true,
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
  imports:[CommonModule,FormsModule]
})
export class HerosComponent implements OnInit {
  // hero = 'Paras Deshmane';
  //   hero :Hero ={
  // id:1,
  //   name:" .Paras Deshmane"

  // };
  // heroes=HEROES;

  @Input() hero!: Hero;
  
  // even: boolean=false;
  heroes=HEROES;
  selectedHero?:Hero;
  constructor() { }
  // geteven(){
  //   return (this.hero.id%2!=0)
  // }
  onselect(hero:Hero){
    this.selectedHero = hero;
  }

  ngOnInit() {
  }

}