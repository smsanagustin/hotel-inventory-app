import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'passengers',
    loadChildren: () =>
      import('./passenger-dashboard/passenger-dashboard.module').then(
        (m) => m.PassengerDashboardModule,
      ),
    pathMatch: 'full',
  },
  { path: '**', component: NotFoundComponent },
];
