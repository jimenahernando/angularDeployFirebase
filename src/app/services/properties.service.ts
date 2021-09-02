import { Injectable } from '@angular/core';
import { Property } from '../interfaces/property.interface';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  arrProperties: Property[];
  constructor() { 
    this.arrProperties = [
      {
        id: 1,
        titulo: "Casa Españoleta",
        direccion: "Rambla de Badal, 100, 08014",
        ciudad: "Barcelona",
        numeroHabitaciones: 3,
        propietario: "Sacadeishon",
        disponibilidad: true,
        foto: "../../assets/images/ramblaBadal100.JPG",
        latitud: 41.37043786807235, 
        longitud: 2.1328624691327334
      },
      {
        id: 2,
        titulo: "La casa del subnormal",
        direccion: "C. de Violant d'Hongria Reina d'Aragó 143, 08014" ,
        ciudad: "Barcelona",
        numeroHabitaciones: 4,
        propietario: "EL sin cerebro",
        disponibilidad: true,
        foto: "../../assets/images/ViolantDeHongria143.JPG",
        latitud: 41.38040788712708,
      longitud: 2.134396146471098
      },
      {
        id: 3,
        titulo: "La ilusion de algo propio",
        direccion: "Valencia 80, 08015" ,
        ciudad: "Barcelona",
        numeroHabitaciones: 3,
        propietario: "La familia chiflada",
        disponibilidad: true,
        foto: "../../assets/images/valencia80.JPG",
        latitud: 41.38204170176441, 
        longitud: 2.1493760306975878
      },
      {
        id: 4,
        titulo: "Gran Casona Colonial",
        direccion: "Cami del Verns 2, 08017" ,
        ciudad: "Barcelona",
        numeroHabitaciones: 4,
        propietario: "Violaine",
        disponibilidad: false,
        foto: "../../assets/images/camiDelVerns2.JPG",
        latitud: 41.42613176030321,
        longitud: 2.0891791827090644
      },
    ];
  }

  getAll() : Property[]{
    console.log(this.arrProperties)
    return this.arrProperties;
  }

  getById(id: number) : Property | undefined{
    return this.arrProperties.find(property => property.id === id);
  }

  createProperty(pProperty: Property) : string{
    pProperty.id = this.arrProperties.length + 1;
    pProperty.disponibilidad = true;
    
    this.arrProperties.push(pProperty);
    return 'success';
  }
}
