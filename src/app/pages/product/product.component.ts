/**
 * AUTHOR NAME : SAMEER TADAVI 30/10/2020.
 * FILE NAME   : product component 
 * PURSPOSE    : .
 */
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/products.service";
import {Product} from "../../model/product";
import {CartService} from "../../services/cart.service";
import { environment } from '../../../environments/environment';
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    private sub;
    public product:Product;
     baseUrl = environment.baseUrl;
    quantity: number = 1;
    constructor(private route: ActivatedRoute,
                private productService:ProductService,
                private cartService:CartService
    ) { }

    ngOnInit() {
        this.route.params
            .subscribe(res => {
                this.getProduct(res.id);
            })
    }
    getProduct = (id) => {
        this.sub = this.productService.getProducts(this.baseUrl+'getProduct.php')
            .subscribe(res => {
                this.product = res[id-1];
            })
    };
    changeQuantity = (newQuantity:number) => {
        this.quantity = newQuantity;
    };
    addToCart = (product) => {
        if(this.quantity) this.cartService.addToCart({product,quantity:this.quantity})
    };
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
