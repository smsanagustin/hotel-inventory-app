import { Passenger } from './model/passenger.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const PASSENGER_API = 'http://localhost:3000/passengers';

@Injectable()
export class PassengerDashboardService {
  constructor(public http: HttpClient) {}

  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(PASSENGER_API);
  }
}
