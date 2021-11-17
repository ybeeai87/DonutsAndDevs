import { Component, OnInit } from '@angular/core';
import { Result, Donuts } from 'src/donut';
import { DonutService } from 'src/donut.service';


@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {

  donutList: Result [] = [];
  

  constructor(private donutService: DonutService) { }

  ngOnInit(): void {
    this.donutService.getAllDonuts().subscribe((response: Donuts) => {
      this.donutList = response.results;

      console.log(this.donutList);
    })
  
  }

}
