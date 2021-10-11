import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AirlineService } from '../services/airline.service';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

 data1:any =[]
 data:any=[]
 airline:any=[]
 customer:any=[]
 name:any
 p: number = 1;
 k:number = 1;
 options = {
    filename:'',
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: false,
    headers: ['Id', 'Name', "Country",'Slogan', 'Logo', 'Head Quaters', 'Website', 'Established'],
    showTitle: true,
    title: '',
    useBom: false,
    removeNewLines: true,
    keys: ['id','name','country','slogan', 'logo', 'head_quaters', 'website', 'established' ]
  }
   options1 = {
    filename:'',
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: false,
    headers: ["ID", "Name", "Trips"],
    showTitle: true,
    title: '',
    useBom: false,
    removeNewLines: true,
    keys: ['_id', 'name', 'trips' ]
  }

  constructor(private airlineService: AirlineService, private customerService: CustomerService, private router: Router) { }


  ngOnInit(): void {
  this.airlineService.getAllAirlines().subscribe(res => {
    this.airline = res
    this.data = res



  })
  this.customerService.getAllCustomers().subscribe((res:any) => {
     this.customer = res
    let data = res["data"]

    this.data1 = data
    debugger
    console.log(res)
  })
  }
  onViewCust(id:any){
     this.router.navigate(['/viewPassenger', id]);
  }
  onEditCust(id:any){
     this.router.navigate(['/updatePassenger', id]);
  }
  onDeleteCust(id:any){
     if (confirm('Are you sure to delete this record?') == true) {
       this.customerService.deleteCustomer(id).subscribe((data)=>{
         console.log(data)
         this.customerService.getAllCustomers().subscribe((data: any)=>{
          this.customer = data
         })
       })
  }}
  onEdit(id:any){
     this.router.navigate(['/updateAirline', id]);
  }
  onView(id:any){
    this.router.navigate(['/viewAirline', id])
  }
  onDelete(id:any){
    if (confirm('Are you sure to delete this record?') == true) {
      this.airlineService.deleteAirline(id).subscribe((res: any) => {
        this.airlineService.getAllAirlines().subscribe((response: any) => {
          console.log(response);
          this.airline = response;
        });
      });
    }
  }

 Search() {
    if (this.name == '') {
      this.ngOnInit();
    } else {
      this.airline = this.airline.filter((res: any) => {
        return res.name
          .toLocaleLowerCase()
          .match(this.name.toLocaleLowerCase());
      });
    }
  }
   search() {
    if (this.name == '') {
      this.ngOnInit();
    } else {
      this.customer = this.customer.filter((res: any) => {
        return res.name
          .toLocaleLowerCase()
          .match(this.name.toLocaleLowerCase());
      });
    }
  }

  key: string = 'id';
  reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
   key1: string = 'id1';
  reverse1: boolean = false;
  sort1(key1: string) {
    this.key1 = key1;
    this.reverse1 = !this.reverse1;
  }

}
