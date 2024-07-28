import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  SimpleChange,
} from '@angular/core';
import { Passenger } from '../../model/passenger.interface';

@Component({
  selector: 'passenger-detail',
  template: `
    <div class="passenger-container">
      <div class="passenger-item">
        <div class="name-status">
          <span class="user-name" *ngIf="!isEditing">{{
            passenger.fullname
          }}</span>

          <input
            class="input-field"
            *ngIf="isEditing"
            [value]="passenger.fullname"
            (input)="onChangeName(fullname.value)"
            #fullname
          />

          <span
            class="status"
            [ngStyle]="{
              backgroundColor: passenger.checkedIn ? 'green' : 'red',
            }"
          >
            {{ passenger.checkedIn ? 'Checked in' : 'Checked out' }}
          </span>
        </div>
        <div class="buttons">
          <button (click)="toggleEdit()">
            {{ !isEditing ? 'Edit' : 'Done' }}
          </button>
          <button (click)="removePassenger()">Remove</button>
          <button (click)="emitViewEvent()">View</button>
        </div>
      </div>
      <div>
        <p>
          Checked in date:
          {{
            passenger.checkedIn
              ? (passenger.checkedInDate | date: 'MMMM d, YYYY' | uppercase)
              : 'Not checked in!'
          }}
        </p>
      </div>
    </div>
  `,
  styleUrl: 'passenger-detail.component.scss',
})
export class PassengerDetailComponent implements OnChanges {
  @Input() passenger: Passenger = {} as Passenger;
  isEditing: boolean = false;

  @Output() remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();
  @Output() edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();
  @Output() view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['passenger']) {
      this.passenger = Object.assign({}, changes['passenger'].currentValue);
    }
  }

  onChangeName(value: string) {
    this.passenger.fullname = value;
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      this.edit.emit(this.passenger);
    }
  }

  removePassenger() {
    this.remove.emit(this.passenger);
  }

  emitViewEvent() {
    this.view.emit(this.passenger);
  }
}
