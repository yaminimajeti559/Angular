import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { map } from 'rxjs';
import { Product } from '../model/products';
import { ProductserviceService } from '../productservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css']
})
export class HttpRequestComponent {

  @ViewChild('productsForm') form:NgForm;
  editMode:boolean=false;
  allproducts:Product[]=[];
  currentProductId:string;
  errorMessage:string=null;
  constructor(private productservice:ProductserviceService){}

      onProductCreate(products:{pName:string,desc:string,price:string}){
        if(!this.editMode){
          this.productservice.createProduct(products);
          alert('Product Added,Click Fetch Products to view the added product.');
          this.form.reset();
        }
        else{
          this.productservice.updateProduct(this.currentProductId,products);
          alert('Product Updated');
          this.editMode=false;
          this.form.reset();
        }
      }

      ngOnInit(){
        this.fetchProducts();
      }

      onProductsFetch(){
        this.fetchProducts();
      }

      private fetchProducts(){
          this.productservice.fetchProduct().subscribe((products)=>{
              this.allproducts=products;
          },(err)=>{
            this.errorMessage=err.message;
          })
      }

      onDeleteProduct(id:string){
        this.productservice.deleteProduct(id);
        this.productservice.fetchProduct();
      }

      onDeleteAllProduct(){
        this.productservice.deleteAllProducts();
        this.productservice.fetchProduct();
      }

      onUpdateCLick(id:string){
        this.currentProductId=id;
          let currentProduct=this.allproducts.find((p)=>{ return p.id==id});

          this.form.setValue({
            pName:currentProduct.pName,
            desc:currentProduct.desc,
            price:currentProduct.price
          });

          this.editMode=true;
      }
}
