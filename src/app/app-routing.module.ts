import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { MainLoyoutComponent } from './shared/components/main-loyout/main-loyout.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {path: '', component: MainLoyoutComponent, children: [
    {path: '',redirectTo:'/', pathMatch: 'full'},
    {path: '', component: HomePageComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/:id', component: BlogPostComponent}
  ]}, 
  {
    path: 'admin', loadChildren: './admin/admin.module#AdminModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
