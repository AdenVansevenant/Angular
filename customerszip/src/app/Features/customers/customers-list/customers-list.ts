import { Component, Input } from '@angular/core';

import { map, Observable } from 'rxjs';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { CapitalizePipe } from '../../../Shared/pipes/capitalize.pipe';
import { FilterTextbox } from '../filter-textbox/filter-textbox';
import { SorterService } from '../../orders/Services/sorter-service';
import { Customer } from '../Models/customer.model';

@Component({
  selector: 'app-customers-list',
  imports: [AsyncPipe, FilterTextbox, CapitalizePipe, CurrencyPipe],
  templateUrl: './customers-list.html',
  styleUrl: './customers-list.css',
})
export class CustomersList {
 customersOrderTotal$: Observable<number>;
  currencyCode: string;
  filteredCustomers$ : Observable<Customer[]>;
  private _customers$: Observable<Customer[]>

  @Input() 
  get customers(): Observable<Customer[]>{
    return this._customers$;
}
set customers(value: Observable<Customer[]>) {
    if (value) {
     this.filteredCustomers$ = this._customers$ = value;
   // this.calculateOrders();
    }
}
  constructor(private sorterService: SorterService){
    this.customersOrderTotal$ =new Observable<number>();
    this.filteredCustomers$ =  new Observable<Customer[]>();
    this.currencyCode = 'EUR';
   this._customers$ = new Observable<Customer[]>();
   }
  
  ngOnInit(){
    this.customersOrderTotal$ = this.calculateOrders();
  }




  calculateOrders(): Observable<number> {
return this.filteredCustomers$.pipe(
  map(customers =>
    customers.reduce((total, cust) => total + cust.orderTotal, 0)
  )
);
  }

 



  // voor de map is custerers een observable binnen de map is customers een array na de map terug een observable
  filtering(data: string) {

 console.log (data);


    if (data) {
        this.filteredCustomers$ = this._customers$.pipe(map(customers =>
        customers.filter(cust => {
            return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                   cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                   cust.orderTotal.toString().indexOf(data) > -1;
        })));
    } else {
        this.filteredCustomers$ = this._customers$;
    }
    this.customersOrderTotal$ = this.calculateOrders();
  }





sort(prop: string) {
  this.filteredCustomers$ = this.filteredCustomers$.pipe(
    map(customers => {
      this.sorterService.sort(customers, prop);  // sortService moet je niet zelf kunnen schrijven
      return customers;
    })
  );
}
}
