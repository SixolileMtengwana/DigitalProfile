import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './-root/-pages/home/home.component';
import { ProfilePage } from './-root/-pages/profile/profile.component';
import { BioComponent } from './-root/-pages/bio/bio.component';
import { ProjectsComponent } from './-root/-pages/projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'blog', component: ProfilePage },
  { path: 'bio', component: BioComponent },
  { path: 'projects', component: ProjectsComponent },



  /* Route Fallback  */
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
