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

  constructor(private propertiesService: PropertiesService) {
  }

  ngOnInit() : void{
    this.arrProperties = this.propertiesService.getAll(); 
    // console.log(this.arrProperties);
  }

}
