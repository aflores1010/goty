import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { GameInterface } from '../interfaces/game';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games: GameInterface[] = [];

  constructor(private http: HttpClient) { }

  getGameList() {

    if (this.games.length === 0) {
      console.log('from firebase ');
      return this.http.get<GameInterface[]>(`${ environment.url}/api/getGoty`).pipe(
        tap( (games: GameInterface[]) => this.games = games)
        );
    } else {
      console.log('from cache ');

      return of(this.games);
    }
  }

  vote(id: string) {
    console.log('voting ', id);
    return this.http.post(`${ environment.url}/api/getGoty/${id}`, {}).pipe(
      catchError(err => {
       console.log(err)
       return of(err.error);
      })
    )
  }

}
