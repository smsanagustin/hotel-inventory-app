import { Component, inject, input, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../model/passenger.interface';

@Component({
  selector: 'passenger-viewer',
  template: `
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
  constructor() {}

  ngOnInit() {
    this.passengerService.getPassenger(1).subscribe((data: Passenger) => {
      this.passenger = data;
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
}
