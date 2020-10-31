/**
 * AUTHOR NAME : SAMEER TADAVI 30/10/2020.
 * FILE NAME   : category module 
 * PURSPOSE    : .
 */
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {categoryRoutes} from "./category.routes";
import {SharedModule} from "../../shared/shared.module";
import {CategoryComponent} from "./category.component";
@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(categoryRoutes)
    ],
    declarations: [
        CategoryComponent
    ]
})
export class CategoryModule { }