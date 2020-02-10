import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'portafolio', component: PortafolioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
