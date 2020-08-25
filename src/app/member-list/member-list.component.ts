import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/members.service';
import { style, trigger, transition, animate } from '@angular/animations';

const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('800ms', style({ opacity: 1 })),
  ]),
]);

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss'],
  animations: [fadeAnimation],
})
export class MemberListComponent implements OnInit {
  listOfMember: any;

  constructor(private memberService: MemberService) {}

  ngOnInit() {
    //Affectation d'ArrayMembers qui contient members.json a listOfMember
    this.listOfMember = this.memberService.ArrayMembers;
  }
}
