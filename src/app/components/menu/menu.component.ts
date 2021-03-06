import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    @Output() conponentSelected: EventEmitter<string>;
    // appMenu = [
    //     {title: 'Add Disp.', url: 'update-electrodomestic', icon: 'list'},
    //     {title: 'Home.', url: 'principal', icon: 'list'},
    //     {title: 'Salir', url: '/login', icon: 'list'},
    // ];

// <<<<<<< HEAD
    constructor() {
        this.conponentSelected = new EventEmitter();
    }

// =======
    appMenu = [
        {title: 'Home', url: 'index', icon: 'home'},
        {title: 'Agregar Dispositivo.', url: 'update-electrodomestic', icon: 'add-circle-outline'},
        // {title: 'Info. Electrodomestico', url: 'info-electrod', icon: 'information-circle'},
        {title: 'Usuario', url: 'user', icon: 'contact'},
        {title: 'Estadisticas', url: 'stats/day', icon: 'stats'},
        {title: 'Electrodomésticos', url: 'electrodomestics', icon: 'list'},
        {title: 'Mis metas', url: 'parametros/day', icon: 'calculator'},
        {title: 'Salir', url: '/login', icon: 'power'}
    ];

    // constructor() {
    // }

// >>>>>>>
//     05;
//     e70a2997581dbefaaba25f5e1813fd73f49366;

    ngOnInit() {
    }

    selectComponent(title: string) {
        this.conponentSelected.emit(title);
    }

}
