import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor() { }
  selectedHero?: Hero;
  hero: Hero = {
    id:1,
    name: 'WidStorm'
  };
  heroes = HEROES;
  onHover(hero:Hero){
    console.log('hovering');
  }
  onSelect(hero: Hero){
    console.log('clicked')
    console.log(hero)
    this.selectedHero = hero
  }
  ngOnInit(): void {
  }

}
