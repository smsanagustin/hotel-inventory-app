import { Passenger } from './model/passenger.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PassengerDashboardService {
  constructor(public http: HttpClient) {
    console.log(this.http);
  }

  getPassengers(): Passenger[] {
    return [
      {
        id: 2,
        fullname: 'john',
        checkedIn: false,
        children: [
          {
            name: 'sophie',
            age: 3,
          },
          {
            name: 'jericho',
            age: 9,
          },
        ],
      },
      {
        id: 3,
        fullname: 'mary',
        checkedIn: true,
        checkedInDate: 1490742000000,
      },
      {
        id: 4,
        fullname: 'paul',
        checkedIn: false,
      },
      {
        id: 5,
        fullname: 'lisa',
        checkedIn: true,
        checkedInDate: 1490742000000,
        children: [
          {
            name: 'pips',
            age: 3,
          },
          {
            name: 'marius',
            age: 8,
          },
        ],
      },
      {
        id: 6,
        fullname: 'mark',
        checkedIn: false,
      },
    ];
  }
}
