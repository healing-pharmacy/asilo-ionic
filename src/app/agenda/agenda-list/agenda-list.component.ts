import { Component, Input, OnInit } from '@angular/core';
import { Agenda } from '../model/agenda';

@Component({
  selector: 'app-agenda-list',
  templateUrl: './agenda-list.component.html',
  styleUrls: ['./agenda-list.component.scss'],
})
export class AgendaListComponent  implements OnInit {

  @Input() agendas: Agenda[] = [];

  constructor() { }

  ngOnInit(): void {}

}
