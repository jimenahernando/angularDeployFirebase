import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Property } from '../interfaces/property.interface';
import { map } from 'rxjs/operators';
import { pipeFromArray } from 'rxjs/internal/util/pipe';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  property: any;
  collection!: AngularFirestoreCollection<Property>;

  constructor(private firestore: AngularFirestore) {
    // this.arrProperties = [
    //   {
    //     id: 1,
    //     titulo: "Casa Españoleta",
    //     direccion: "Rambla de Badal, 100, 08014",
    //     ciudad: "Barcelona",
    //     numeroHabitaciones: 3,
    //     propietario: "Sacadeishon",
    //     disponibilidad: true,
    //     foto: "../../assets/images/ramblaBadal100.JPG",
    //     latitud: 41.37043786807235, 
    //     longitud: 2.1328624691327334
    //   },
    //   {
    //     id: 2,
    //     titulo: "La casa del subnormal",
    //     direccion: "C. de Violant d'Hongria Reina d'Aragó 143, 08014" ,
    //     ciudad: "Barcelona",
    //     numeroHabitaciones: 4,
    //     propietario: "EL sin cerebro",
    //     disponibilidad: true,
    //     foto: "../../assets/images/ViolantDeHongria143.JPG",
    //     latitud: 41.38040788712708,
    //     longitud: 2.134396146471098
    //   },
    //   {
    //     id: 3,
    //     titulo: "La ilusion de algo propio",
    //     direccion: "Valencia 80, 08015" ,
    //     ciudad: "Barcelona",
    //     numeroHabitaciones: 3,
    //     propietario: "La familia chiflada",
    //     disponibilidad: true,
    //     foto: "../../assets/images/valencia80.JPG",
    //     latitud: 41.38204170176441, 
    //     longitud: 2.1493760306975878
    //   },
    //   {
    //     id: 4,
    //     titulo: "Gran Casona Colonial",
    //     direccion: "Cami del Verns 2, 08017" ,
    //     ciudad: "Barcelona",
    //     numeroHabitaciones: 4,
    //     propietario: "Violaine",
    //     disponibilidad: false,
    //     foto: "../../assets/images/camiDelVerns2.JPG",
    //     latitud: 41.42613176030321,
    //     longitud: 2.0891791827090644
    //   },
    // ];
    this.collection = this.firestore.collection<Property>('properties');
  }

  getAll(): Observable<any> {
    // CON DATOS EN ARRAY
    // console.log(this.arrProperties);
    // return this.arrProperties;

    // CON OBSERVABLE
    return this.firestore.collection('properties').valueChanges();
  }

  getById(pId: string): Observable<any> {
    // return this.arrProperties.find(property => property.id === id);

    // 1era forma
    // let documento = await this.collection.doc(pId).get().toPromise();
    // return documento.data();

    // 2da forma
    return this.collection.doc(pId).valueChanges();
  }

  createProperty(pProperty: Property): Promise<any> {
    // pProperty.id = this.arrProperties.length + 1;
    // pProperty.disponibilidad = true;

    // this.arrProperties.push(pProperty);
    // return 'success';

    return new Promise((resolve, reject) => {
      try {
        //resolve. recibo una house pero sin id, firestores tiene un metodo que me
        // permite crear un id y asignarselo a nuevo elemento (ID de documento)
        const id = this.firestore.createId();
        pProperty.id = id;
        const result = this.collection.doc(id).set(pProperty);
        resolve({ success: 'ok' });
      } catch (error) {
        reject(error);
      }
    })
  }

  delete(pId: string) : Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        const result = this.collection.doc(pId).delete();
        resolve({ success: 'ok' });
      } catch (error) {
        reject(error);
      }
    })
  }
}
