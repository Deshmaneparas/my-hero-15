import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';

@Component({
  standalone:true,
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
  imports:[CommonModule,FormsModule]
})
export class HerosComponent implements OnInit {
  // hero = 'Paras Deshmane';
    hero :Hero ={
  id:1,
    name:"Paras Deshmane"

  };

  constructor() { }

  ngOnInit() {
  }

}