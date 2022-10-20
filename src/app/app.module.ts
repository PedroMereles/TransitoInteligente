import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Modulos
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule} from '@angular/common/http';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

import { environment } from 'src/environments/environment';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MapsModule } from './maps/maps.module';
import { ResultLawsComponent } from './components/result-laws/result-laws.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { InfoLawsComponent } from './components/info-laws/info-laws.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { MisViajesComponent } from './components/mis-viajes/mis-viajes.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { AgregarSenalComponent } from './components/agregar-senal/agregar-senal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegistrarUsuarioComponent,
    VerificarCorreoComponent,
    RecuperarPasswordComponent,
    SpinnerComponent,
    PageNotFoundComponent,
    ResultLawsComponent,
    NavBarComponent,
    InfoLawsComponent,
    MisViajesComponent,
    FiltroPipe,
    AgregarSenalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    MapsModule,
    HttpClientModule,
    AngularFirestoreModule,
   /* provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())*/
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
