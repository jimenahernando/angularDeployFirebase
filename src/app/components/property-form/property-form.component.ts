import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Property } from 'src/app/interfaces/property.interface';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css']
})
export class PropertyFormComponent implements OnInit {

  propertyUpdated: any = {};
  
  constructor(
    private propertiesService: PropertiesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      // para que en el select no salga vacio, sino con value="" que indica seleccione una ciudad
    this.propertyUpdated.ciudad = "";    
  }

  ngOnInit(): void {
    this.activatedRoute.params?.subscribe(params=> {
      if(params.idProperty){
        // si tienes parametros e sporque esta actualizando
        const result = this.propertiesService.getById(params.idProperty);
        result.subscribe(data => {
          this.propertyUpdated = data;
        });
      }
    })
  }

  async onSubmit(pForm: any){
    const property = pForm.value;
    let message: any;
    if(this.propertyUpdated.id){
      message = await this.propertiesService.createProperty(property, this.propertyUpdated.id);
    }else{
      message = await this.propertiesService.createProperty(property); 
    }
    if(message.success){
      this.router.navigate(['/home']);
    }
  }
}
