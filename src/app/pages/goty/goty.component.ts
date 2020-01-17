import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { GameInterface } from 'src/app/interfaces/game';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  games: GameInterface[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {

    this.gameService.getGameList().subscribe( (resp: GameInterface[]) => {
      this.games = resp;
      console.log(this.games);
    })

  }

}
