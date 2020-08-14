import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'services-tutorial';

  users: User[];

  constructor(private usersvc: UserService) {}

  ngOnInit(): void {

    this.usersvc.list().subscribe(
      res => {
        this.users=res as User[];
        console.log(res);
      },
      err => {console.error(err);}

    );
  }
}
