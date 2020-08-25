import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MemberListComponent } from './member-list/member-list.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', redirectTo: '' },
  { path: 'members-list', component: MemberListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
