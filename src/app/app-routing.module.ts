import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarSenalComponent } from './components/agregar-senal/agregar-senal.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfoLawsComponent } from './components/info-laws/info-laws.component';
import { LoginComponent } from './components/login/login.component';
import { MisViajesComponent } from './components/mis-viajes/mis-viajes.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { ResultLawsComponent } from './components/result-laws/result-laws.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';

const routes: Routes = [

  {
     path: '', redirectTo:'login', pathMatch:'full'
  },
  {
     path: 'login', component:LoginComponent
  },
  {
     path: 'registrar-usuario', component:RegistrarUsuarioComponent
  },
  { 
    path: 'recuperar-password', component:RecuperarPasswordComponent
  },
  {
     path: 'verificar-correo', component:VerificarCorreoComponent
  },
  { 
    path: 'dashboard', component:DashboardComponent 
  },
  { 
    path: 'result-laws', component:ResultLawsComponent 
  },
  { 
    path: 'info-laws/:id', component:InfoLawsComponent 
  },
  { 
    path: 'mis-viajes', component:MisViajesComponent 
  },
  { 
    path: 'agregar-senales', component:AgregarSenalComponent 
  },
  { 
    path: '**', redirectTo:'page-not-found', pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
