import { Component,OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  items:MenuItem[]|undefined;
    ngOnInit(): void {
      this.items=[
        {
          label:'Home',
          icon:'pi pi-home',
          routerLink:['/Home']
        },    
        {
          label:'Admin',
          icon:'pi pi-fw pi-user',
          items:[
              {
                label:'Students List',
                icon:'pi pi-palette',
                routerLink:['/Admin/Students']
              },
              {
                label:'Courses List',
                icon:'pi pi-palette',
                routerLink:['/Admin/Courses']
              }
          ]
        }
      ]
    }
}
