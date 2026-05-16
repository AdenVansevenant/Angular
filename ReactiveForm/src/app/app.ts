import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Country } from './Shared/country.model';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {
  contactForm: FormGroup;
  countryList : Country[];

 constructor() {
    this.contactForm =   new FormGroup({
      firstname: new FormControl('Janssens',[Validators.required,Validators.minLength(10)]),
      lastname: new FormControl('',[Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]),
      email:new FormControl('',[Validators.email,Validators.required]),
      gender: new FormControl('',[Validators.required]),
      isMarried: new FormControl('',[Validators.required]),
      country: new FormControl('',[Validators.required]),
})

  this.countryList = [
    new Country("1", "Belgium"),
    new Country('2', 'Nederland'),
    new Country('3', 'England')
  ];
}
get firstname() {
  return this.contactForm.get('firstname');
}

get lastname() {
  return this.contactForm.get('lastname');
}
get email() {
  return this.contactForm.get('email');
}

get gender() {
  return this.contactForm.get('gender');
}

get isMarried() {
  return this.contactForm.get('isMarried');
}

get country() {
  return this.contactForm.get('country');
}

onSubmit() {
  console.log(this.contactForm.value);
}
revert() {
  this.contactForm.reset();
}
}
