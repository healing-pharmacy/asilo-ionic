import { Observable } from 'rxjs';
import { Agenda } from './../model/agenda';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  cards = [
    { title: 'Card 1', subtitle: 'Subtitle 1', content: 'Content 1' },
    { title: 'Card 2', subtitle: 'Subtitle 2', content: 'Content 2' },
    { title: 'Card 3', subtitle: 'Subtitle 3', content: 'Content 3' }
  ];

  constructor() {

   }

  ngOnInit() {
  }

}
