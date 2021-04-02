import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { User } from './user.model';

@Injectable()
export class UserService {
  currentUser: Subject<User> = new BehaviorSubject<User>(null);

  constructor() { }

  public setCurrentUser(newUser: User): void {
    this.currentUser.next(newUser);
  }
}

export const UserServiceInjectables: Array<any> = [
  UserService
]
