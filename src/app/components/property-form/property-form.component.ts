import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css']
})
export class PropertyFormComponent implements OnInit {

  constructor(
    private propertiesService: PropertiesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit($event: any){
    const message = this.propertiesService.createProperty($event.value);
    if (message === 'success'){
      this.router.navigate(['/home']);
    }
  }
}
