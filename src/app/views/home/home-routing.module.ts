import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';

const routes: Routes = [
  {path: '', redirectTo: 'home/:theme', pathMatch: 'full'},
  {
    path: 'home',
    children: [
      {path: ':theme', component: WelcomeComponent},
    ]
  },
  {path: '**', redirectTo: 'home/:theme', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
