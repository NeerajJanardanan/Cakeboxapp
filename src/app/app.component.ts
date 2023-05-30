import { Component } from '@angular/core';
import { CakeService } from './service/cake.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cakeboxfront';

  isLoggedIn=false
  constructor(private service:CakeService){
    this.isLoggedIn=this.service.isAuthenticated()
  }

}
