import { MemberService } from './member.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { MembersComponent } from './members/members.component';
import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    MembersComponent,
    HomeComponent,
    PlaylistComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
