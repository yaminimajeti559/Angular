import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products=[
    {
      name:'TV',
      price:25000
    },
    {
      name:'Fridge',
      price:5000
    },
    {
      name:'Washing Machine',
      price:7000
    },
    {
      name:'Desktop',
      price:9000
    }
  ]

  getAllProducts(){
    return this.products.length;
  }
  getav(){
    return this.products.filter(product=>product.price<7500).length;
  }
  getnav(){
    return this.products.filter(product=>product.price>=7500).length;
  }

  productButton: string='allProducts';
  onbuttonChange(data:string){
       this.productButton=data;
  }
  searchText='';
  onSearchEntered(search:string){
    this.searchText=search;
  }
  sayHello(hello:HTMLInputElement){
    alert('Hello '+hello.value);
  }
}
