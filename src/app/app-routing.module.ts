import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { DetailComponent } from './containers/detail/detail.component';

const routes: Routes = [{
  path: '', component: HomeComponent,
  
}, {
  path: ':id', component: DetailComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
