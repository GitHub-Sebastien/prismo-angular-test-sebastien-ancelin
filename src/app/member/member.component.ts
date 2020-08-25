import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/members.service';
import { ActivatedRoute } from '@angular/router';
import { fadeAnimation } from '../member-card/member-card.component';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
  animations: [fadeAnimation],
})
export class MemberComponent implements OnInit {
  firstname: string;
  lastname: string;
  function: string;
  avatar: string;
  description: string;

  constructor(
    private memberService: MemberService, //Instancie le service et les paramètres router
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id']; //Récupére le fragment :id de la route

    //Affecte les attributs de la classe a l'id du fragment et résout le nom pour l'interpolation
    this.firstname = this.memberService.getMemberById(+id).firstname;
    this.lastname = this.memberService.getMemberById(+id).lastname;
    this.function = this.memberService.getMemberById(+id).function;
    this.description = this.memberService.getMemberById(+id).description;
    this.avatar = this.memberService.getMemberById(+id).avatar;
  }
}
