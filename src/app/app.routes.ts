import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { StatsComponent } from './components/stats/stats.component';
import { ChatComponent } from './components/chat/chat.component';
import { MayorMenorComponent } from './components/games/mayor-menor/mayor-menor.component';
import { AhorcadoComponent } from './components/games/ahorcado/ahorcado.component';
import { PreguntadosComponent } from './components/games/preguntados/preguntados.component';
import { SimonComponent } from './components/games/simon/simon.component';
import { BanderasComponent } from './components/games/banderas/banderas.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';

export const routes: Routes = [
    {path: "", redirectTo:"home", pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent,},
    {path:'login', component:LoginComponent},
    {path:'stats', component:StatsComponent},
    {path:'chat', component:ChatComponent},
    {path:'mayor-menor', component:MayorMenorComponent},
    {path:'ahorcado', component:AhorcadoComponent},
    // {path:'preguntados', component:PreguntadosComponent},
    {path:'banderas', component:BanderasComponent},
    {path:'simon', component:SimonComponent},
    {path:'encuesta', component:EncuestaComponent},



    {path: "**", redirectTo:"home", pathMatch:'full'},
];
