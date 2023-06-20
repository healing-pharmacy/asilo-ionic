import { Component, OnInit } from '@angular/core'; 
import { PacienteService } from './paciente.service';
import { PacienteDTO } from './model/paciente.dto';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
})
export class PacientePage implements OnInit {

  items: PacienteDTO[] = [];

  constructor(public pacienteService: PacienteService) { }
  
  ngOnInit() {
    this.pacienteService.findAll()
    .subscribe(response => {
      this.items = response;
      //console.log(response);
    }, 
    error => {
      console.log(error);
    });
  }
  

}
