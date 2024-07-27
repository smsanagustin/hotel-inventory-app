import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'not-found',
  template: ` <h1>Not found. <a routerLink="/">Go home?</a></h1> `,
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule],
  standalone: true,
})
export class NotFoundComponent {}
