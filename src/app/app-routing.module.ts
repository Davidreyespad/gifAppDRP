import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BusquedaComponent } from './gifs/busqueda/busqueda.component';

const routes: Routes = [
  {
    path: '',
    component: BusquedaComponent,
    pathMatch: 'full',
  },
  {
    path: 'sidebar',
    component: SidebarComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
