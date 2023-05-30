import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import{ActivatedRoute,Router} from '@angular/router'
import { CakeService } from '../service/cake.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  id:any

  checkOutForm=new FormGroup({
    address:new FormControl(),
    matter:new FormControl()

  })
  constructor(private route:ActivatedRoute ,private service:CakeService ,private router:Router){
    this.id=this.route.snapshot.params['id']

  }
  checkOut(){
    let formData=this.checkOutForm.value    
    this.service.placeOrder(this.id,formData).subscribe(res=>{
      Swal.fire('Any fool can use a computer')
      this.router.navigateByUrl("products")
    }
    )
  }
}
