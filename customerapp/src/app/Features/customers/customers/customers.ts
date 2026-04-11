import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../../Shared/Models/customer.model';
import { CusomerService } from '../../../Shared/Services/cusomer-service';
import { CustomersList } from '../customers-list/customers-list';

@Component({
  selector: 'app-customers',
  imports: [CustomersList, AsyncPipe],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers {
  title: string;
  customers$: Observable<Customer[]>;

  constructor(private customerService: CusomerService) {
    this.title = 'Onze klanten';
    this.customers$ = this.customerService.getCustomers();
  }
}
