import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { ListaCategoriaComponent } from './lista-categoria/lista-categoria.component';
import { FormCategoriaComponent } from './form-categoria/form-categoria.component';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    ListaCategoriaComponent,
    FormCategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    BreadcrumbModule,
    TableModule
  ]
})
export class CategoriasModule { }
