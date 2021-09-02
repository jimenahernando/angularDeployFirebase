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
        foto: "",
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
        foto: "",
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
        foto: "",
        latitud: 41.38204170176441, 
        longitud: 2.1493760306975878
      },
      {
        id: 4,
        titulo: "Gran casona colonial",
        direccion: "Cami del Verns 2, 08017" ,
        ciudad: "Barcelona",
        numeroHabitaciones: 4,
        propietario: "Violaine",
        disponibilidad: false,
        foto: "",
        latitud: 41.42613176030321,
        longitud: 2.0891791827090644
      },
    ];
  }
}
