import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

// components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

// services
import { PassengerDashboardService } from './passenger-dashboard.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PassengerDashboardComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerDetailComponent,
    PassengerCountComponent,
    PassengerViewerComponent,
    PassengerFormComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [PassengerViewerComponent, PassengerDashboardComponent],
  providers: [PassengerDashboardService],
})
export class PassengerDashboardModule {}
