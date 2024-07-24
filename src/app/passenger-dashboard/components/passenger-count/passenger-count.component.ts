import { Component, Input } from '@angular/core';
import { Passenger } from '../../model/passenger.interface';

@Component({
  selector: 'passenger-count',
  template: `
    <h3>Passenger count: {{ getCheckedInCount() }}/{{ items.length }}</h3>
  `,
})
export class PassengerCountComponent {
  @Input() items: Passenger[] = [];

  getCheckedInCount(): number {
    if (!this.items) return 0;
    return this.items.filter((item: Passenger) => item.checkedIn).length;
  }
}
