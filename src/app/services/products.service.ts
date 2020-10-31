/**
 * AUTHOR NAME : SAMEER TADAVI 30/10/2020.
 * FILE NAME   : product service
 * PURSPOSE    : .
 */
import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class ProductService {

    constructor(public http: Http) { }

    public getProducts(dataURL:string){
        return this.http.get(dataURL)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error || 'Server error'));
    }
}