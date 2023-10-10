import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { FormularioComponent } from './formulario/formulario.component';


const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'sobre', component: SobreComponent },
{ path: 'contato', component: ContatoComponent },
{path: 'formulario',component: FormularioComponent}

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}