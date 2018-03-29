import { Component, OnInit } from '@angular/core';
import {UserList} from '../userlist/userlist.component';

@Component({
  selector: 'app-stup',
  templateUrl: './stup.component.html',
  styleUrls: ['./stup.component.css']
})
export class StupComponent implements OnInit {
  private  stupLists: Array<StupList>
  constructor() { }
  ngOnInit() {
    this.stupLists=[
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


    var handler=$("#itemWrap>li")
    handler.wookmark({
      autoResize: true,
      container: $('#mainWrap'),
      offset: 0,
      outerOffset: 16,
      verticalOffset:20,
      itemWidth:20+"%"
    })
  }

}
export class StupList {
  constructor(public id: number,
              public time: number,
              public name: string,
              public sex: string,
              public post: string,
              public role: string,
              public phone: number)
      /**///
  {}
}
