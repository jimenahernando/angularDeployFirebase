import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/interfaces/property.interface';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrProperties: Property[];

  constructor(private propertiesService: PropertiesService) {
    this.arrProperties= [];
  }

  ngOnInit(): void {
    this.arrProperties = this.propertiesService.getAll(); 
  }

}
