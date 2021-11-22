import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../../../utils/validators';
import {ProductsService} from '../../../core/services/products/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(private formBuilder: FormBuilder,
              private productsService: ProductsService,
              private router: Router,
              private activeRoute:ActivatedRoute) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id).subscribe(product => {
        this.form.patchValue(product);
      });
    })
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      title:['', [Validators.required] ],
      price:['', [Validators.required, CustomValidators.isValidPrice] ],
      image:[''],
      description:['',[Validators.required] ]
    })
  }

  saveProduct(event:Event){
    event.preventDefault();
    if(this.form.valid){
      const product = this.form.value;
      this.productsService.updateProduct(this.id, product).subscribe((response) => {
        console.log(response);
        this.router.navigate(['./admin/products'])
      })
    }
    console.log(this.form.value)
  }

  get priceField() {
    return this.form.get('price');
  }

}
