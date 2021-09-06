import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from 'src/app/interfaces/property.interface';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrProperties: Observable<any[]> = new Observable();
  latitud: number = 0;
  longitud: number = 0;

  constructor(private propertiesService: PropertiesService) {
    navigator.geolocation.getCurrentPosition((position)=>{
      // console.log(position);
      this.latitud = position.coords.latitude;
      this.longitud = position.coords.longitude;
    });
  }

  ngOnInit() : void{
    this.arrProperties = this.propertiesService.getAll(); 
    // console.log(this.arrProperties);
  }

  botonDerechoPresionado(pMap: any){
    // trae un monton de info valiosa.
    console.log(pMap);
    alert("Estas haciendo click con el derecho");
  }

}
