import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Donut } from 'src/donut';
import { DonutService } from 'src/donut.service';

@Component({
  selector: 'app-donut-details',
  templateUrl: './donut-details.component.html',
  styleUrls: ['./donut-details.component.css']
})
export class DonutDetailsComponent implements OnInit {

donut:Donut = {} as Donut;

  constructor(private router:ActivatedRoute, private service:DonutService) { }

  ngOnInit(): void {
    const routeParams = this.router.snapshot.paramMap;
    let id: number = Number(routeParams.get("id"));
  
    this.service.getDonutById(id).subscribe((response:Donut) => {
      this.donut = response;
    });
  }

}
