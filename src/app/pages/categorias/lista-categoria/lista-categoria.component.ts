import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { Categoria } from '../Shared/categoria.model';
import { CategoriaService } from '../Shared/categoria.service';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {

  categorias: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService
  ) { }

  items: MenuItem[] = [];
  home: MenuItem = {};

  ngOnInit(): void {
    this.items = [
      { label: 'Home', routerLink: "/" },
      { label: 'Lista', routerLink: "/categorias" }
    ]
    this.home = { icon: 'pi pi-home' };

    this.categoriaService.getAll().subscribe(
      categorias => this.categorias = categorias,
      error => alert("erro ao carregar a lista de categorias")
    )
    console.log(this.categorias);
  }

  msgAlert() {
    alert('excluir');
  }

  deleteCategoria(categoria: any) {
    const confirmacao = confirm("Deseja mesmo excluir?");

    if (confirmacao) {
      this.categoriaService.delete(categoria.id).subscribe(
        () => this.categorias = this.categorias.filter(element => element != categoria),
        () => alert("erro ao tetar exluir")
      )
    }
  }
}
