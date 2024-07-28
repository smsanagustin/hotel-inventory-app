import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Passenger } from '../../model/passenger.interface';
import { Baggage } from '../../model/baggage.interface';

@Component({
  selector: 'passenger-form',
  template: `
    <div>
      <h1>Passenger form</h1>

      <form #form="ngForm" (ngSubmit)="handleSubmit(form.value, !!form.valid)">
        <div>
          Passenger name:
          <input
            type="text"
            #fullname="ngModel"
            required
            minlength="4"
            name="fullname"
            [ngModel]="detail.fullname"
          />
          <div
            *ngIf="fullname.errors?.['required'] && fullname.dirty"
            class="error"
          >
            Full name is requiired
          </div>
          <div *ngIf="fullname.errors?.['minlength'] && fullname.dirty">
            Name should have at least 4 characters.
          </div>
        </div>
        <br />
        <div>
          Passenger ID:
          <input
            type="number"
            required
            name="id"
            #id="ngModel"
            [ngModel]="detail.id"
          />
          <div *ngIf="id.errors?.['required'] && id.dirty" class="error">
            Passener ID is requiired
          </div>
        </div>
        <div>
          <label to="checkedIn">Checked in?</label>
          <input
            type="checkbox"
            name="checkedIn"
            [ngModel]="detail.checkedIn"
            (ngModelChange)="addCheckInDate($event)"
          />
        </div>
        <div *ngIf="form.value.checkedIn">
          <input
            type="number"
            name="checkedInDate"
            [ngModel]="detail.checkedInDate"
          />
        </div>
        <div>
          <select [ngModel]="detail.baggage" name="baggage">
            <option
              *ngFor="let baggage of baggages"
              [value]="baggage.value"
              [selected]="baggage.value === detail.baggage"
            >
              {{ baggage.key }}
            </option>
          </select>
        </div>
        <button type="submit" [disabled]="form.invalid">
          Update passenger
        </button>
      </form>
    </div>
  `,
  styleUrls: ['./passenger-form.component.scss'],
})
export class PassengerFormComponent {
  @Input() detail: Passenger = {} as Passenger;

  @Output() passengerUpdate: EventEmitter<Passenger> =
    new EventEmitter<Passenger>();

  baggages: Baggage[] = [
    {
      key: 'No baggage',
      value: 'none',
    },
    {
      key: 'Hand only baggage',
      value: 'hand-only',
    },
    {
      key: 'Hold only baggage',
      value: 'hold-only',
    },
    {
      key: 'Hand and hold baggage',
      value: 'hand-hold',
    },
  ];

  addCheckInDate(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkedInDate = Date.now();
    }
  }

  // we use a second parameter to check if the input fields are valid so that
  // even if the user submit the form using inspect, we still have control
  // when it comes to cheecking if the form's valid
  handleSubmit(passenger: Passenger, isValid: boolean) {
    if (isValid) {
      this.passengerUpdate.emit(passenger);
    }
  }
}
