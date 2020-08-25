import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss'],
})
export class MemberCardComponent implements OnInit {
  @Input() id: number;
  @Input() firstname: string;
  @Input() lastname: string;
  @Input() avatar: string;
  @Input() function: string;
  @Input() description: string;

  constructor() {}

  ngOnInit(): void {}
}
