import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { ListaCategoriaComponent } from './lista-categoria/lista-categoria.component';
import { FormCategoriaComponent } from './form-categoria/form-categoria.component';

import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  declarations: [
    ListaCategoriaComponent,
    FormCategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    BreadcrumbModule
  ]
})
export class CategoriasModule { }
