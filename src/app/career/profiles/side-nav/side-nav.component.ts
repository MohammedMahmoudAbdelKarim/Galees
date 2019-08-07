import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { UsersService } from 'src/app/shared/services/users.service';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent implements OnInit {
  notificationCount;
  id;
  sitter = JSON.parse(localStorage.getItem('user'));
  constructor(private notifService: NotificationService,
    private userService: UsersService) { }
  ngOnInit() {
    setTimeout(() => {
      console.log(this.id)
      this.notifService.getOrdersNum(this.sitter.id).subscribe(
        res => this.notificationCount = res
      )
    }, 2000);
  }

}
