import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
// import { CollapsePageComponent } from './components/collapse-page/collapse-page.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'blog', component: BlogPageComponent },
  // { path: '', component: CollapsePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
