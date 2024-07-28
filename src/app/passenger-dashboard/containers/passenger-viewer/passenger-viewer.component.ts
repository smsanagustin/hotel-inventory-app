import { Component, inject, input, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../model/passenger.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, switchMap, switchMapTo } from 'rxjs';

@Component({
  selector: 'passenger-viewer',
  template: `
    <button (click)="goBack()">&lsaquo; Go back</button>
    <passenger-form
      [detail]="passenger"
      (passengerUpdate)="handleUpdate($event)"
    ></passenger-form>
  `,
  styleUrl: 'passenger-viewer.component.scss',
})
export class PassengerViewerComponent {
  passenger: Passenger = {} as Passenger;
  passengerService: PassengerDashboardService = inject(
    PassengerDashboardService,
  );
  private route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private router: Router) {}

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((data: Params) =>
          this.passengerService.getPassenger(data['id']),
        ),
      )
      .subscribe((data: Passenger) => {
        this.passenger = Object.assign({}, this.passenger, data);
      });
  }

  handleUpdate(passenger: Passenger) {
    if (passenger) {
      this.passengerService
        .updatePassenger(passenger)
        .subscribe((data: Passenger) => {
          this.passenger = Object.assign({}, this.passenger, data);
        });
    }
  }

  goBack() {
    this.router.navigate(['/passengers']);
  }
}
