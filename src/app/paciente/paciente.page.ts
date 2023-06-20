import { Component, OnInit } from '@angular/core'; 
import { PacienteService } from './paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
})
export class PacientePage implements OnInit {

  constructor(public pacienteService: PacienteService) { }

  ngOnInit() {
    this.pacienteService.findAll()
    .subscribe(response => {
      console.log(response);
    }, 
    error => {
      console.log(error);
    });
  }
  

}
