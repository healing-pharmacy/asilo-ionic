import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Agenda } from '../model/agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private readonly API = '/assets/agenda.json'

  constructor(private httpClient : HttpClient) { }

  list() {
    return this.httpClient.get<Agenda[]>(this.API)
    .pipe(
      first(),
      tap(agendas => console.log(agendas))
    );
  }

}
