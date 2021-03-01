import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: "for-people" , loadChildren: () => import('./people/people.module').then(m => m.PeopleModule)},
  {path: "for-business" , loadChildren: () => import('./business/business.module').then(m => m.BusinessModule)},
  {
    path: '',
    redirectTo: 'for-people',
    pathMatch: 'full'
  },
  { path: "**",redirectTo:"for-people"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
