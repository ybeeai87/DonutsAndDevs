import { Component, OnInit } from '@angular/core';

import { People, Complete } from 'src/people';
import { HallOfFameService } from 'src/hall-of-fame.service';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css']
})
export class FamousPeopleComponent implements OnInit {
  
personList: Complete []=[];

  constructor( private service:HallOfFameService) { }

  ngOnInit(): void {
    this.service.getAllPeople().subscribe((response:People) => {
      this.personList = response.complete;
    })
  }

}
