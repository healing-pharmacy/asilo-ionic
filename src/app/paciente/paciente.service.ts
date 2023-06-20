import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { PacienteDTO } from 'src/app/paciente/model/paciente.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {


  constructor(public http: HttpClient) { 

  }

  findAll() : Observable<PacienteDTO[]>{
    return this.http.get<PacienteDTO[]>(`${environment.api}/pacientes`);
  }
}