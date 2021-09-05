import { Component, Input, OnInit } from '@angular/core';
import { Property } from 'src/app/interfaces/property.interface';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  @Input() property: Property | undefined;

  constructor(private propertiesService:PropertiesService) { }

  ngOnInit(): void {
  }

  async eliminarPropiedad(pId: string | undefined){
    if(pId){
      console.log(pId);
      const response = await this.propertiesService.delete(pId);
      if(response.success){
        alert('Propiedad borrada correctamente');
      }
    }
  }
}
