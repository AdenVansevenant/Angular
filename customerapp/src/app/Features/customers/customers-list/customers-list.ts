import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from '../../../Shared/Models/customer.model';

@Component({
  selector: 'app-customers-list',
  imports: [AsyncPipe],
  templateUrl: './customers-list.html',
  styleUrl: './customers-list.css',
})
export class CustomersList {
  customerOrderTotal$: Observable<number>;
  currencyCode: string;
  filteredCustomers$: Observable<Customer[]>;
  private _customers$: Observable<Customer[]>;

  @Input() get customers(): Observable<Customer[]> {
    return this._customers$;
  }

  set customers(value: Observable<Customer[]>) {
    if (value) {
      this.filteredCustomers$ = value;
      this._customers$ = value;
      this.customerOrderTotal$ = this.filteredCustomers$.pipe(
        map((customers) =>
          customers.reduce((total, customer) => total + customer.orderTotal, 0)
        )
      );
    }
  }

  constructor() {
    this.customerOrderTotal$ = of(0);
    this.filteredCustomers$ = of([]);
    this.currencyCode = 'EUR';
    this._customers$ = of([]);
  }
}
