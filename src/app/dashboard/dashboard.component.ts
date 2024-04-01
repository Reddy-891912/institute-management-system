import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private _router: Router) { }

  logout() {
    // if token remove willing to go back to login page
    localStorage.removeItem("login-token")
    // navigate to login page
    this._router.navigateByUrl("/login");
  }

}
