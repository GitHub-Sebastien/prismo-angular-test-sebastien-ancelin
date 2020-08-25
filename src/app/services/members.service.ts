import memberList from '../../assets/members.json';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  public ArrayMembers = memberList;

  //Récupére l'id du Json pour l'afficher dans le fragment :id
  getMemberById(id: number) {
    const memberId = this.ArrayMembers.find((memberObject) => {
      return memberObject.id === id;
    });
    return memberId;
  }

  //Ajoute un membre au formulaire
  addMember(
    firstname: string,
    lastname: string,
    role: string,
    description: string,
    avatar: string
  ) {
    const memberObject = {
      id: 0,
      firstname: '',
      lastname: '',
      avatar: '',
      description: '',
      function: '',
    };

    memberObject.firstname = firstname;
    memberObject.lastname = lastname;
    memberObject.avatar = avatar;
    memberObject.description = description;
    memberObject.function = role;
    memberObject.id = this.ArrayMembers[this.ArrayMembers.length - 1].id + 1;

    this.ArrayMembers.push(memberObject);
  }
}
