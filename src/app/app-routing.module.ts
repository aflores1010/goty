import { RouterModule, Routes } from '@angular/router';

import { GotyComponent } from './pages/goty/goty.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'goty', component: GotyComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
