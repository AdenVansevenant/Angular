import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { CustomersList } from '../customers-list/customers-list';
import { AsyncPipe } from '@angular/common';
import { Customer } from '../Models/customer.model';
import { CustomerService } from '../Services/customer-service';

@Component({
  selector: 'app-customers',
  imports: [CustomersList],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers {
title: string;
customers$ : Observable<Customer[]>;

  constructor(private customerService: CustomerService) { 
    this.title ='Customers';
    this.customers$ = new Observable<Customer[]>();
  }

  ngOnInit() {
   console.log ("OnInit");
   this.customers$ =  this.customerService.getCustomers();

}
}
