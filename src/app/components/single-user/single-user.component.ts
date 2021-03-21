import {Component, Input, OnInit} from '@angular/core';
import {Users} from '../../models/Users';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent   {
  @Input()
  user!: Users;
  choosenUser !: Users;

  constructor(private userService: UserService) { }


   xxx(user: Users): void{
    // this.choosenUser = user;
    console.log('choosen user is ', this.user.name );
    this.userService.getAllUsersPosts(user.id).subscribe(value => console.log(value)); }



}
