import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { GameInterface } from 'src/app/interfaces/game';
import Swal from 'sweetalert2'


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

  vote(id: string) {
    this.gameService.vote(id).subscribe((resp: any) => {
      if(resp.ok) {
        Swal.fire({
          title: 'Gracias',
          text: resp.message,
          icon: 'success',
          confirmButtonText: 'Cerrars'
        })
      } else {
        Swal.fire({
          title: 'Ups',
          text: resp.message,
          icon: 'error',
          confirmButtonText: 'Cerrars'
        })
      }
      console.log('resp ', resp);
    } );
  }

}
