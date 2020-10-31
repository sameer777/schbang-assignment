/**
 * AUTHOR NAME : SAMEER TADAVI 30/10/2020.
 * FILE NAME   : shared module
 * PURSPOSE    : All shared module are here.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {QuantityControlComponent} from "../components/quantity-control/quantity-control.component";
@NgModule({
    imports:[
        CommonModule,
        FormsModule,
    ],
    declarations:[
        QuantityControlComponent
    ],
    exports:[
        CommonModule,
        FormsModule,
        QuantityControlComponent
    ]
})

export class SharedModule {

}