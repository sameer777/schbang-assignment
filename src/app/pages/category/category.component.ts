/**
 * AUTHOR NAME : SAMEER TADAVI 30/10/2020.
 * FILE NAME   : category component 
 * PURSPOSE    : .
 */
import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/products.service";
import {Product} from "../../model/product";
import {CartService} from "../../services/cart.service";
import {Router} from "@angular/router";
import { environment } from '../../../environments/environment';
@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    public products:Array<Product>;
    private sub;
      baseUrl = environment.baseUrl;
    constructor(
         private productService:ProductService,
         private cartService:CartService,
         private router: Router
    ) { }

    ngOnInit() {
        this.load();
    }
    load = () => {
       this.sub = this.productService.getProducts(this.baseUrl+'getProduct.php')
            .subscribe(res => {
                this.products = res;
            })
    };
    addToCart = (product) => {
        this.cartService.addToCart({product,quantity:1})
    };
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
