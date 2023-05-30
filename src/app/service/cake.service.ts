import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CakeService {
  baseUrl=`http://127.0.0.1:8000/api`
  headers=new HttpHeaders({
    "content-type":"application/json"
  })

  constructor(private http:HttpClient) {

   }
   createAccount(data:any){
    return this.http.post(`${this.baseUrl}/register/`,data)
   }
   authorize(data:any){
   return this.http.post(`${this.baseUrl}/token/`,data)
   }
   getAllcakes(){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })
   
    return this.http.get(`${this.baseUrl}/cakes/`,{headers:header})
   }
   getCakedetail(id:any){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })
    return this.http.get(`${this.baseUrl}/cakes/${id}/`,{headers:header})

   }
   addToCart(id:any){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })
    return this.http.post(`${this.baseUrl}/cakes/${id}/add_to_cart/`,null,{headers:header})
   }
   listCart(){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })
    return this.http.get(`${this.baseUrl}/carts/`,{headers:header})
   }
   placeOrder(id:any,data:any){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })
    return this.http.post(`${this.baseUrl}/cakes/${id}/place_order/`,data,{headers:header})
   }
   listOrder(){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })
    return this.http.get(`${this.baseUrl}/orders/`,{headers:header})
   }
   addReview(id:any,data:any){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })
    return this.http.post(`${this.baseUrl}/cakes/${id}/add_review/`,data,{headers:header})
   }

   isAuthenticated(){
    return "token" in localStorage
   }

}
