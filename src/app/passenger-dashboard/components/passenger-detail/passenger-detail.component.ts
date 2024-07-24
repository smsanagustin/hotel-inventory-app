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
    <div>
      <span
        class="status"
        [ngStyle]="{
          backgroundColor: passenger.checkedIn ? 'green' : 'red',
        }"
      >
        {{ passenger.checkedIn ? 'Checked in' : 'Checked out' }}
      </span>
      :
      <span *ngIf="!isEditing">{{ passenger.fullname }}</span>
      <div class="input-field">
        <input
          *ngIf="isEditing"
          [value]="passenger.fullname"
          (input)="onChangeName(fullname.value)"
          #fullname
        />
        <button (click)="toggleEdit()">
          {{ !isEditing ? 'Edit' : 'Done' }}
        </button>
        <button (click)="removePassenger()">Remove</button>
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
    <div>
      <p>Children: {{ passenger.children?.length || 0 }}</p>
    </div>
  `,
  styleUrl: 'passenger-detail.component.scss',
})
export class PassengerDetailComponent implements OnChanges {
  @Input() passenger: Passenger = {} as Passenger;
  isEditing: boolean = false;

  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();

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
}
