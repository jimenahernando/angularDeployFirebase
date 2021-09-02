import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/app/interfaces/property.interface';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  property: Property | undefined;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private propertiesService:PropertiesService) { }

  ngOnInit(): void {
    this.activatedRoute.params?.subscribe(params => {
      const id= Number(params.idProperty);
      this.property = this.propertiesService.getById(id);
    })
  }

}
