import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css']
})
export class OrderDashboardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  showOrder: boolean = false;
  allOrders = []
  public startingOrderNumber = 1;

 public eachOrder = setInterval(() => {
  if(this.showOrder !== !setInterval)
  this.allOrders.push(this.startingOrderNumber++);

}, 2000);
public startOrders(){
   this.showOrder = !this.showOrder;
   this.eachOrder
}

public stopOrders(){
  clearInterval(this.eachOrder)
}

}
