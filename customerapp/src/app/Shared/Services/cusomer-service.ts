import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Customer } from '../Models/customer.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CusomerService {
  private apiURL = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiURL).pipe(
      tap((result) => {
        console.log('opgehaald data :', result);
      })
    );
  }
}
