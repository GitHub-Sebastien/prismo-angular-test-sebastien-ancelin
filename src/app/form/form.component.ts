import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/members.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private memberService: MemberService, private router: Router) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    const firstname = form.value['firstname'];
    const lastname = form.value['lastname'];
    const role = form.value['role'];
    const description = form.value['description'];
    const avatar = form.value['avatar'];
    this.memberService.addMember(
      firstname,
      lastname,
      role,
      description,
      avatar
    );
    this.router.navigate(['/members-list']);
  }
}
