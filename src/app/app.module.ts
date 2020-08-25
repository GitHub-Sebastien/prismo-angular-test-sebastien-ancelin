import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberCardComponent } from './member-card/member-card.component';
import { MemberService } from './services/members.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    MemberListComponent,
    MemberCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [MemberService],
  bootstrap: [AppComponent],
})
export class AppModule {}
