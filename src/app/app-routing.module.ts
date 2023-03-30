import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoUsuarioComponent } from './components/info-usuario/info-usuario.component';
import { TablaResultadoComponent } from './components/tabla-resultado/tabla-resultado.component';

const routes: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full'},
  { path: 'usuarios', component: TablaResultadoComponent,},
  { path: 'usuarios/:id', component: InfoUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
