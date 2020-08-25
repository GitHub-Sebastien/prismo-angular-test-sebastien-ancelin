import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/members.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent implements OnInit {
  firstname: string;
  lastname: string;
  function: string;
  avatar: string;
  description: string;

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.firstname = this.memberService.getMemberById(+id).firstname;
    this.lastname = this.memberService.getMemberById(+id).lastname;
    this.function = this.memberService.getMemberById(+id).function;
    this.description = this.memberService.getMemberById(+id).description;
    this.avatar = this.memberService.getMemberById(+id).avatar;
  }
}
