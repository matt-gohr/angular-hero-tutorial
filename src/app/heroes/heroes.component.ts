import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService, private messageService: MessageService) { }
  selectedHero?: Hero;
  hero: Hero = {
    id:1,
    name: 'WidStorm'
  };
  heroes: Hero[] = [];
  onHover(hero:Hero){
    console.log('hovering');
  }
  onSelect(hero: Hero){

    this.selectedHero = hero
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }
  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => this.heroes = heroes)
  }

}
