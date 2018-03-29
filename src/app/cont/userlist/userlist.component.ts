import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  private  userlists: Array<UserList>

  constructor() { }

  ngOnInit() {
    this.userlists=[
      new UserList(1, 'User', '冢虎', '男', '大司马', '魏国', 13001279230),
      new UserList(2, 'User', '武则天','女', '相父', '蜀国', 13001279230),
      new UserList(3, 'User', '卧龙', '男', '相父', '蜀国', 13001279230),
      new UserList(1, 'User', '冢虎', '男', '大司马', '魏国', 13001279230),
      new UserList(2, 'User', '武则天','女', '相父', '蜀国', 13001279230),
      new UserList(3, 'User', '卧龙', '男', '相父', '蜀国', 13001279230),
      new UserList(1, 'User', '冢虎', '男', '大司马', '魏国', 13001279230),
      new UserList(2, 'User', '武则天','女', '相父', '蜀国', 13001279230),
      new UserList(3, 'User', '卧龙', '男', '相父', '蜀国', 13001279230),
    ]



  }

}

export class UserList {
  constructor(public id: number,
              public username: string,
              public name: string,
              public sex: string,
              public post: string,
              public role: string,
              public phone: number)
  {}
}
