import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  appMenu = [
    {title: 'Add Disp.', url: 'add-electrodomestic', icon: 'list'},
    {title: 'Addd.', url: 'addd', icon: 'list'},
    {title: 'Home.', url: 'principal', icon: 'list'},
    {title: 'Salir', url: 'login', icon: 'list'}
  ];
  constructor() { }

  ngOnInit() {}

}