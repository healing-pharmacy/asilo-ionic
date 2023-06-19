import { Injectable } from '@angular/core';

import { Agenda } from '../model/agenda';
import { tap, first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private readonly API = 'api/agendas';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Agenda[]>(this.API).pipe(
      first(),
      tap(agendas => console.log(agendas))
    );
  }
}