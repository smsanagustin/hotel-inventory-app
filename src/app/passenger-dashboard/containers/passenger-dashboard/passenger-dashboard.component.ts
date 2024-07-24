import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../model/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  template: ` <div>
    <h2>Airline Passengers</h2>
    <passenger-count [items]="airlinePassengers"></passenger-count>
    <div *ngFor="let passenger of airlinePassengers">
      {{ passenger.fullname }}
    </div>
    <passenger-detail
      *ngFor="let passenger of airlinePassengers"
      [passenger]="passenger"
      (remove)="handleRemove($event)"
      (edit)="handleEdit($event)"
    ></passenger-detail>
  </div>`,
  styleUrls: ['passenger-dashboard.component.scss'],
})
export class PassengerDashboardComponent implements OnInit {
  airlinePassengers: Passenger[] = [];
  constructor() {}
  ngOnInit() {
    this.airlinePassengers;
  }

  handleEdit(event: any) {
    this.airlinePassengers = this.airlinePassengers.map((passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
    console.log(this.airlinePassengers);
  }

  handleRemove(event: any) {
    this.airlinePassengers = this.airlinePassengers.filter(
      (passenger: Passenger) => passenger.id !== event.id,
    );
  }
}
