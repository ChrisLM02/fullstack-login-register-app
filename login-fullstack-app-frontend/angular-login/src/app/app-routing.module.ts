import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { RutaprotegidaComponent } from './auth/rutaprotegida/rutaprotegida.component';
import { AuthGuard } from './services/guard/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio',component:DashboardComponent, canActivate: [AuthGuard]},
  {path:'iniciar-sesion',component:LoginComponent},
  {path:'register', component:RegisterComponent},
  { path: 'ruta-protegida', component: RutaprotegidaComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
