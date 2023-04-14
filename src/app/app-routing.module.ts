import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SideComponent} from './side/side.component';

const routes: Routes = [
  { path: 'side', component: SideComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
