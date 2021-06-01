import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  constructor(private formBuilder:FormBuilder,
              private router:Router) 
  { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      pass:['',[Validators.required]]
    })
  }

  login(event:Event) {
    event.preventDefault();
    if(this.form.valid){
      this.router.navigate(['./admin'])
    }
    console.log(this.form.value);
  }

  get emailField() {
    return this.form.get('email');
  }

  get passField() {
    return this.form.get('pass');
  }

}
