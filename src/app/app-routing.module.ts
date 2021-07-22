import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DisplaysongComponent} from "./listsong/displaysong.component";
import {PlaysongComponent} from "./playsong/playsong.component";

const routes: Routes = [
  {path:'list',component:DisplaysongComponent},
  {
      path: 'play/:id',
      component: PlaysongComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
