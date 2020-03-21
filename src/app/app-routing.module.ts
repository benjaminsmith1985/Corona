import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PconferenceComponent } from './components/pconference/pconference.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditnewsComponent } from './components/editnews/editnews.component';
import { InsertnewsComponent } from './components/insertnews/insertnews.component';
import { UpdateheadlineComponent } from './components/updateheadline/updateheadline.component';
import { UpdatechartComponent } from './components/updatechart/updatechart.component';
import { UpdatecaseComponent } from './components/updatecase/updatecase.component';
import { VideoupdateComponent } from './components/videoupdate/videoupdate.component';
import { LiveComponent } from './components/live/live.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'pressconf', component: PconferenceComponent},
  { path: 'login', component: LoginComponent },
  { path: 'live', component: LiveComponent },
  { path: 'videoupdate', component: VideoupdateComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'editnews/:newsId', component: EditnewsComponent, canActivate: [AuthGuard]},
  { path: 'insertnews', component: InsertnewsComponent, canActivate: [AuthGuard]},
  { path: 'updateheadline', component: UpdateheadlineComponent, canActivate: [AuthGuard]},
  { path: 'updatechart', component: UpdatechartComponent, canActivate: [AuthGuard]},
  { path: 'updatecase', component: UpdatecaseComponent, canActivate: [AuthGuard]}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  