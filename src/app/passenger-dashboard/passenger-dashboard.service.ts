import { Passenger } from './model/passenger.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, throwError } from 'rxjs';

const PASSENGER_API = 'http://localhost:3000/passengers';

@Injectable()
export class PassengerDashboardService {
  constructor(public http: HttpClient) {}

  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(PASSENGER_API).pipe(
      catchError((err) => {
        return throwError(err);
      }),
    );
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.put<Passenger>(
      `${PASSENGER_API}/${passenger.id}`,
      passenger,
    );
  }

  deletePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.delete<Passenger>(`${PASSENGER_API}/${passenger.id}`);
  }
}
