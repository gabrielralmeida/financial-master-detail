import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {

  constructor() { }

  items: MenuItem[] = [];
  home: MenuItem = {};

  ngOnInit(): void {
    this.items = [
      { label: 'Home', routerLink: "/" },
      { label: 'Lista', routerLink: "/categorias" }
    ]
    this.home = { icon: 'pi pi-home' };
  }

}
