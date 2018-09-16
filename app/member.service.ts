import { Member } from './members.model';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MemberService {
 memberAdded = new EventEmitter<Member[]>();
 private members: Member [] = [

    new Member( 'Sis Mary Olayinka', 'http://placeimg.com/160/200/people?t=1536927237372'),
    new Member( 'Bro Seyi Emmanuel', 'http://placeimg.com/160/200/people?t=1536927237372'),
    new Member( 'Bro Gbenga', 'http://placeimg.com/160/200/people?t=1536927237372'),
    new Member( 'Sis Chichi', 'http://placeimg.com/160/200/people?t=1536927237372'),
    new Member( 'Sis Ese', 'http://placeimg.com/160/200/people?t=1536927237372'),
    new Member( 'Sis Victoria', 'http://placeimg.com/160/200/people?t=1536927237372'),
    new Member( 'Sis Chinwe', 'http://placeimg.com/160/200/people?t=1536927237372'),
    new Member( 'Bro Ema', 'http://placeimg.com/160/200/people?t=1536927237372'),
    new Member( 'Bro Ema', 'http://placeimg.com/160/200/people?t=1536927237372'),
    new Member( 'Bro Ema', 'http://placeimg.com/160/200/people?t=1536927237372'),
    new Member( 'Bro Gibson', 'http://placeimg.com/160/200/people?t=1536927237372'),
    new Member( 'Bro Sam', 'http://placeimg.com/160/200/people?t=1536927237372'),
    new Member( 'Sis Bimbo', 'http://placeimg.com/160/200/people?t=1536927237372'),



  ];
  constructor() {}

  getMember() {
    return this.members.slice();

  }
  onAddTeam(member: Member) {
    this.members.push(member);
    this.memberAdded.emit(this.members.slice());

  }

}
