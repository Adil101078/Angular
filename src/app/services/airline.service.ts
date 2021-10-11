import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {
  ApiUrl='https://api.instantwebtools.net/v1/airlines'

  constructor(private http:HttpClient) { }
  getAllAirlines(){
    return this.http.get(this.ApiUrl);
  }
  getAirlineById(id:any){
    return this.http.get(`${this.ApiUrl}/${id}`)
  }
  deleteAirline(id:any){
    return this.http.delete(`${this.ApiUrl}/${id}`)
  }
  updateAirlineById(id:any, data:any){
    return this.http.put(`${this.ApiUrl}/${id}`, data)
  }
}
