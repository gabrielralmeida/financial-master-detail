import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasModule } from './pages/categorias/categorias.module';
import { FormCategoriaComponent } from './pages/categorias/form-categoria/form-categoria.component';

const routes: Routes = [
  { path: 'categorias', loadChildren: () => CategoriasModule },
  { path: 'formulario', component: FormCategoriaComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
