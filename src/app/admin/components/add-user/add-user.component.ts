import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  form:FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router) 
  { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      pass:['',[Validators.required]]
    })
  }

  saveUser(event:Event) {
    event.preventDefault();
    if(this.form.invalid) {

    }
  }

  get nameField() {
    return this.form.get('name');
  }

  get emailField() {
    return this.form.get('email');
  }

  get passField() {
    return this.form.get('pass');
  }

}
