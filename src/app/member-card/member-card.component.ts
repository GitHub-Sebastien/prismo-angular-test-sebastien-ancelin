import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1000ms', style({ opacity: 1 })),
  ]),
]);

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss'],
  animations: [fadeAnimation],
})
export class MemberCardComponent implements OnInit {
  //Déclaration des propiétés personnalisés
  @Input() id: number;
  @Input() firstname: string;
  @Input() lastname: string;
  @Input() avatar: string;
  @Input() function: string;
  @Input() description: string;
  state: string = 'default';

  rotate() {
    this.state = this.state === 'default' ? 'rotate' : 'default';
  }

  constructor() {}

  ngOnInit(): void {}
}
