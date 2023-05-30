import { Component, OnInit } from '@angular/core';
import { CakeService } from '../service/cake.service';

@Component({
  selector: 'app-productlit',
  templateUrl: './productlit.component.html',
  styleUrls: ['./productlit.component.css']
})
export class ProductlitComponent implements OnInit{
  cakes:any
  constructor(private service:CakeService){
    
  }
  ngOnInit(): void {
    this.service.getAllcakes().subscribe(res=>this.cakes=res)
  }
}
