import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditProfileComponent} from './edit-profile/edit-profile.component';

const routes: Routes = [
  {path: '', redirectTo: 'edit/:theme', pathMatch: 'full'},
  {
    path: 'edit',
    children: [
      {path: ':theme', component: EditProfileComponent}
    ]
  },
  {path: '**', redirectTo: 'edit/:theme', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
