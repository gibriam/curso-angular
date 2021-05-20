import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../../../utils/validators';
import {ProductsService} from '../../../core/services/products/products.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private productsService: ProductsService,
              private router: Router) 
  {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id:['',Validators.required],
      title:['',Validators.required],
      price:['',Validators.required, CustomValidators.isValidPrice],
      image:[''],
      description:['',Validators.required]
    })
  }

  saveProduct(event:Event){
    event.preventDefault();
    if(this.form.valid){
      const product = this.form.value;
      this.productsService.createProduct(product).subscribe((response) => {
        console.log(response);
        this.router.navigate(['./admin/products'])
      })
    }
    console.log(this.form.value)
  }

  get priceField() {
    console.log(this.form.get('price'))
    return this.form.get('price');
  }

}
