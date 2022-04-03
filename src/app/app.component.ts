import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        items: [],
        routerLink: "/"
      },
      {
        label: 'Features',
        icon: 'pi pi-fw pi-pencil',
        items: [],
        routerLink: "/categorias"
      },
      {
        label: 'Pricing',
        icon: 'pi pi-fw pi-pencil',
        items: []
      },
      {
        label: 'Disable',
        icon: 'pi pi-fw pi-pencil',
        items: []
      }
    ];
  }
}
