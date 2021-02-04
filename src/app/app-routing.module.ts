import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiddingComponent } from './bidding/bidding.component';
import { LoginComponent } from './login/login.component';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
{path:'',component:LoginComponent},
{path:'player',component:PlayerComponent},
{path:'team',component:TeamComponent},
{path:'bidding',component:BiddingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
