import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AirlineService } from 'src/app/services/airline.service';

@Component({
  selector: 'app-update-airline',
  templateUrl: './update-airline.component.html'
})
export class UpdateAirlineComponent implements OnInit {
  airlineForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    country: new FormControl(''),
    logo: new FormControl(''),
    slogan: new FormControl(''),
    head_quaters: new FormControl(''),
    website: new FormControl(''),
    established: new FormControl('')
  })

  constructor(private router:ActivatedRoute, private airlineService:AirlineService, private route:Router) { }

  ngOnInit(): void {
    this.airlineService.getAirlineById(this.router.snapshot.params.id).subscribe((data:any) =>{
      this.airlineForm =  new FormGroup({
        id: new FormControl(data['id']),
        name: new FormControl(data['name']),
        country: new FormControl(data['country']),
        logo: new FormControl(data['logo']),
        slogan: new FormControl(data['slogan']),
        head_quaters: new FormControl(data['head_quaters']),
        website: new FormControl(data['website']),
        established: new FormControl(data['established'])

      })
    })
  }
  onSubmit(){
     if (confirm('Are you sure to delete this record?') == true) {
    this.airlineService.updateAirlineById(this.router.snapshot.params.id, this.airlineForm.value).subscribe((data) => {
      console.log(data)
      this.route.navigate(['/home']);
    })
  }
}

}
