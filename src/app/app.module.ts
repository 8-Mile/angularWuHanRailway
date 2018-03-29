import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContComponent } from './cont/cont.component';
import { UserlistComponent } from './cont/userlist/userlist.component';
import { StupComponent } from './cont/stup/stup.component';
import {RouterModule, Routes} from '@angular/router';
const routerCofig: Routes = [
  {path: '' , redirectTo: '/userlist', pathMatch: 'full'},
  {path: 'userlist' , component: UserlistComponent},
  {path: 'stup' , component: StupComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContComponent,
    UserlistComponent,
    StupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerCofig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
