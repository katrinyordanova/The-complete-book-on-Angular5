import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile.model';

@Component({
  selector: 'app-on-push-demo',
  templateUrl: './on-push-demo.component.html',
  styleUrls: ['./on-push-demo.component.scss']
})
export class OnPushDemoComponent implements OnInit {
  profile1: Profile = new Profile('Felipe', 'Coury');
  profile2: Profile = new Profile('Nate', 'Murray');
  
  constructor() { }

  ngOnInit() {
  }

}
