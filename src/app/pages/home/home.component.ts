import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { GameInterface } from 'src/app/interfaces/game';
import {map } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  games: {name: string, value: number}[];

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.db.collection('gameList').valueChanges()
    .pipe(
      map( (res: GameInterface[]) => { return res.map( ({name, votes}) => ({name, value: votes}) )
      })
    ).subscribe( resp  => {
      console.log(resp)
      this.games = resp;
    });
  }

}
