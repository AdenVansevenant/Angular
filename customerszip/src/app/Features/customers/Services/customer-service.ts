import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../Models/customer.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
   private apiURL = `${environment.apiUrl}`;
  constructor(private http: HttpClient) { }
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiURL)
      .pipe(
        tap (result => { console.log ("opgehaald data :" 
          ,result)}),
  
      );
}
}


