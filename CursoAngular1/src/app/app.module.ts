import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RopaService } from './services/ropa.service';
import { ConversorPipe } from './pipes/conversor.pipe';
import { CochesComponent } from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'empleado',component:EmpleadoComponent},
  {path:'fruta',component:FrutaComponent},            
  {path:'contacto',component:ContactoComponent},
  {path:'contacto/:page',component:ContactoComponent},
  {path:'home',component:HomeComponent},
  {path:'coches',component:CochesComponent},     
  {path:'plantillas',component:PlantillasComponent},                   
  {path:'**',component:HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
    ConversorPipe,
    CochesComponent,
    PlantillasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [RopaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
