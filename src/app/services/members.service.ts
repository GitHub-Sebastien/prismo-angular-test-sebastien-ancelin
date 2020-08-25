import memberList from '../../assets/members.json';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  public ArrayMembers = memberList;
}
