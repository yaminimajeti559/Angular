import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';
import { Product } from './model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  error=new Subject<string>();
  constructor(private http:HttpClient) { }

  createProduct(products:{pName:string,desc:string,price:string}){
    this.http.post('https://angularrouting-f51da-default-rtdb.firebaseio.com/products.json',products)
    .subscribe((res)=>{
        console.log(res);
    });
  }

  fetchProduct(){
   return this.http.get<{[key:string]:Product}>('https://angularrouting-f51da-default-rtdb.firebaseio.com/products.json')
    .pipe(map((res:{[key:string]:Product})=>{
      const products=[];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          products.push({...res[key],id:key})
        }             
      }
      return products;
    }))
  }

  deleteProduct(id:string){
    this.http.delete('https://angularrouting-f51da-default-rtdb.firebaseio.com/products/'+id+'.json')
        .subscribe(()=>{
          alert('Product deleted');
        });
  }

  deleteAllProducts(){
    this.http.delete('https://angularrouting-f51da-default-rtdb.firebaseio.com/products.json')
    .subscribe();
  }

  updateProduct(id:string,value:Product){
      this.http.put('https://angularrouting-f51da-default-rtdb.firebaseio.com/products/'+id+'.json',value)
      .subscribe();
  }
}
