import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss'],
})
export class MemberListComponent implements OnInit {
  listOfMember: any;

  constructor(private memberService: MemberService) {}

  ngOnInit() {
    this.listOfMember = this.memberService.ArrayMembers;
  }
}
