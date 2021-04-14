import {
    Component, 
    OnChanges, 
    DoCheck, 
    OnDestroy, 
    OnInit, 
    Input, 
    Output, 
    EventEmitter, 
    SimpleChanges
} from '@angular/core';

import {ProductModel} from '../../../models/product.model'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit, DoCheck, OnDestroy{

    @Input() product:ProductModel;
    @Output() onAddCart:EventEmitter<string> = new EventEmitter();
    today = new Date();

    constructor() {
        //console.log('Constructor');
    }

    ngOnInit() {
        //console.log('nOnInit');
    }

    ngDoCheck() {
        //console.log('doCheck');
    }

    ngOnDestroy() {
        //console.log('onDestroy');
    }    

    /*
    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }
    */

    addCart() {
        //console.log(this.product.id);
        this.onAddCart.emit(this.product.id);
    }
}