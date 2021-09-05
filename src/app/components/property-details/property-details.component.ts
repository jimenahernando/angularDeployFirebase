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
    // 1era forma
    // this.activatedRoute.params?.subscribe(async params => {
    //   this.property = await this.propertiesService.getById(params.idProperty);
    //   console.log(this.property);
    // })

    // 2da forma
    this.activatedRoute.params?.subscribe(params => {
      const result = this.propertiesService.getById(params.idProperty);
      result.subscribe(data => this.property = data);
    })
  }

}
