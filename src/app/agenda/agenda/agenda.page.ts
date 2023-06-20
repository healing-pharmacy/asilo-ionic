import { AgendaService } from './../service/agenda.service';
import { Observable } from 'rxjs';
import { Agenda } from './../model/agenda';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  agendas: Agenda[] = []


  constructor(private agendaService: AgendaService) {

   }

  ngOnInit() {
    this.loadAgendas();
  }

  loadAgendas() {
    this.agendaService.list().subscribe(
      (response) => {
        this.agendas = response; // Armazena as agendas recebidas na variável agendas
      },
      (error) => {
        console.error(error);
      }
    );
  }


}
