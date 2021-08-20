import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/domain/game';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})

export class GameCardComponent implements OnInit {
  games: Game[] = [
    // tslint:disable-next-line: max-line-length
    new Game(
      `The Witcher 3`,
      `2015`,
      `RPG`,
      `https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg`

    ),
    new Game(
      `The Legend of Zelda: Breath of the Wild`,
      `2017`,
      `Action/Adventure`,
      `https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg`
    ),
    new Game(
      `Stardew Valley`,
      `2016`,
      `RPG`,
      `https://howlongtobeat.com/games/34716_Stardew_Valley.jpg`
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
