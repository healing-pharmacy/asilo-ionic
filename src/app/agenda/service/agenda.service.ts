import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first, tap } from 'rxjs';

import { Agenda } from '../model/agenda';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private readonly API = `${environment.api}/agendas`

  constructor(private httpClient : HttpClient) { }

  list() {
    return this.httpClient.get<Agenda[]>(this.API)
  }

}
