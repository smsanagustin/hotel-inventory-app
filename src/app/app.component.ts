import { Component } from '@angular/core';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar">
      <a
        *ngFor="let item of nav"
        [routerLink]="item.link"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{
          exact: item.exact,
        }"
        >{{ item.name }}</a
      >
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.scss',
  imports: [PassengerDashboardModule, RouterOutlet, RouterModule, CommonModule],
  standalone: true,
})
export class AppComponent {
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true,
    },
    {
      link: '/404',
      name: '404',
      exact: true,
    },
    {
      link: '/passengers',
      name: 'Passengers Dashboard',
      exact: true,
    },
  ];
}
