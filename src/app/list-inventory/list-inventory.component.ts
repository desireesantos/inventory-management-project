import { Component } from '@angular/core';

@Component({
  selector: 'app-list-inventory',
  templateUrl: './list-inventory.component.html',
  styleUrls: ['./list-inventory.component.css'],
})
export class ListInventoryComponent {
  inventories = [
    {
      name: 'Software',
      path: '/software',
    },
    {
      name: 'Hardware',
      path: '/hardware',
    },
  ];
}
