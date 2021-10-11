import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-view-passenger',
  templateUrl: './view-passenger.component.html'
})
export class ViewPassengerComponent implements OnInit {

     customer:any=[]
     airline:any=[]

  constructor(private customerService: CustomerService,  private router: ActivatedRoute,) { }

  ngOnInit(): void {
    this.customerService.getCustomerById(this.router.snapshot.params.id).subscribe((data: any) => {debugger
      this.customer = data

    })
  }

}
