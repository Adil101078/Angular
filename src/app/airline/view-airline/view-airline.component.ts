import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AirlineService } from 'src/app/services/airline.service';

@Component({
  selector: 'app-view-airline',
  templateUrl: './view-airline.component.html'
})
export class ViewAirlineComponent implements OnInit {
  airline:any=[]

  constructor(private airlineService: AirlineService,  private router: ActivatedRoute,) { }

  ngOnInit(): void {
    this.airlineService.getAirlineById(this.router.snapshot.params.id).subscribe(data => {
      this.airline = data
    })
  }


}
