import { Component } from '@angular/core';
import { CakeService } from '../service/cake.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  cartCount:any=0
  constructor(private service:CakeService){
    if (this.service.isAuthenticated()){
      this.service.listCart().subscribe(res=>this.cartCount=res)
    }
  }

}
