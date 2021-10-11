import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  ApiUrl="https://api.instantwebtools.net/v1/passenger"

  constructor(private http:HttpClient) { }
 getAllCustomers(){
    return this.http.get(this.ApiUrl);
  }
  getCustomerById(id:any){
    return this.http.get(`${this.ApiUrl}/${id}`)
  }
  deleteCustomer(id:any){
    return this.http.delete(`${this.ApiUrl}/${id}`)
  }
  updateCustomerById(id:any, data:any){
    return this.http.put(`${this.ApiUrl}/${id}`, data)
  }
}
