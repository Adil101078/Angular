import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-update-passenger',
  templateUrl: './update-passenger.component.html'
})
export class UpdatePassengerComponent implements OnInit {
  customer:any=[]
  custForm = new FormGroup({
    _id: new FormControl(''),
    name: new FormControl(''),
    trips: new FormControl(''),
    airline: new FormControl(''),
  })

  constructor(private router:ActivatedRoute, private customerService:CustomerService, private route:Router) { }

  ngOnInit(): void {

    this.customerService.getCustomerById(this.router.snapshot.params.id).subscribe((data:any)=>{
      this.custForm = new FormGroup({
        _id:new FormControl(data['_id']),
        name: new FormControl(data['name']),
        trips: new FormControl(data['trips']),
        airline: new FormControl(data['airline'])
      })
    })
  }
  onSubmit() {
    if (confirm('Are you sure to delete this record?') == true) {
      this.customerService.updateCustomerById(this.router.snapshot.params.id, this.custForm.value).subscribe((data:any) => {
        console.log(data)
        this.route.navigate(['/home'])


      })
    }
  }

}
