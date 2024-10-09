import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Product } from '../model/products';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css']
})
export class HttpRequestComponent {

  allproducts:Product[]=[];
  constructor(private http:HttpClient){}
      onProductCreate(products:{pName:string,desc:string,price:string}){
          this.http.post('https://angularrouting-f51da-default-rtdb.firebaseio.com/products.json',products)
          .subscribe((res)=>{
              console.log(res);
          });
      }

      ngOnInit(){
        this.fetchProducts();
      }

      onProductsFetch(){
        this.fetchProducts();
      }

      private fetchProducts(){
        this.http.get<{[key:string]:Product}>('https://angularrouting-f51da-default-rtdb.firebaseio.com/products.json')
        .pipe(map((res:{[key:string]:Product})=>{
          const products=[];
          for(const key in res){
            if(res.hasOwnProperty(key)){
              products.push({...res[key],id:key})
            }             
          }
          return products;
        }))
        .subscribe((products)=>{
            this.allproducts=products;
        })
      }

      onDeleteProduct(id:string){
        this.http.delete('https://angularrouting-f51da-default-rtdb.firebaseio.com/products/'+id+'.json')
        .subscribe(()=>{
          alert('Product deleted');
        });
      }

      onDeleteAllProduct(){
        this.http.delete('https://angularrouting-f51da-default-rtdb.firebaseio.com/products.json')
        .subscribe();
      }
}
