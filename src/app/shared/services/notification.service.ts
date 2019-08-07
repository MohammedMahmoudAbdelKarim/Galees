import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private notification: HttpClient) {}

  getOrders(){
    return this.notification.get('http://localhost:8000/orders');
  }
  sitterOrders(id){
    return this.notification.get('http://localhost:8000/sitter-orders-history/'+id)
  }
  getOrdersNum(id){
    return this.notification.get('http://localhost:8000/get-orders-num/'+id);
  }
}
