import { Component } from '@angular/core';
import { DataService } from "./data.service";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  constructor(private dataService: DataService) {};
  title:string = 'Hi, World!';
  ngOnInit(){
    console.log(this.dataService.getStarShips(9))
  }
}
