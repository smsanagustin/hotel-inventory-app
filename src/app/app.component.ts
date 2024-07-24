import { Component } from '@angular/core';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

@Component({
  selector: 'app-root',
  template: ` <passenger-dashboard></passenger-dashboard> `,
  styleUrl: './app.component.scss',
  imports: [PassengerDashboardModule],
  standalone: true,
})
export class AppComponent {}
