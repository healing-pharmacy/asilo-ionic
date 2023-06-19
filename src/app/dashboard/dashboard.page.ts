import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  constructor(private router: Router) { }
  ngOnInit() {
  }

  agenda() {
    {
      console.log('io')
      this.router.navigate(['/agenda']);
    } 
  }
  funcionario() {
    {
      console.log('io')
      this.router.navigate(['/funcionario']);
    } 
  }
}
