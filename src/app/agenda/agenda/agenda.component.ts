import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';


import { Agenda } from '../model/agenda';
import { AgendaService } from './../services/agenda.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  agendas$: Observable<Agenda[]> | null = null;

  constructor(
    private agendaService: AgendaService,
    private alertController: AlertController,
    private router: Router,
    private route: ActivatedRoute
  ){

    this.agendas$ = this.agendaService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar agenda.');
        return of([]);
      })
    );

  }

  ngOnInit(): void {
  }

  refresh(){
    this.agendas$ = this.agendaService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar agenda.');
        return of([]);
      })
    );
  }

   onError(errorMsg: string) {

  }
}
