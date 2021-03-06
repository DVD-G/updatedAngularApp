import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent} from './about/about.component';
import { ContactsComponent} from './contacts/contacts.component';
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, 
  {path: 'home', component: HomeComponent}, 
  {path: 'blogs', component: BlogsComponent}, 
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
