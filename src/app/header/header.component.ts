import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menus: Array<Menu>;

 currentMenuId: number;

  constructor(public roucter: Router) { }


  ngOnInit() {
    this.menus = [
      new Menu(1, '用户管理', 'userlist'),
      new Menu(2, '角色管理', 'stup'),
      new Menu(3, '站点维护', '')
    ];
  }
  nav(menu: Menu){
    this.roucter.navigateByUrl(menu.link);
    this.currentMenuId = menu.id;
  }

}
export class Menu {
  constructor(
    public id: number,
    public name: string,
    public link: string
  ) {}
}
