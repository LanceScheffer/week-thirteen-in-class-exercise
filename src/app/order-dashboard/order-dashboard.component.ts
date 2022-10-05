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

  allOrders = []
  startingOrderNumber = 1;

 handle = setInterval(() => {
  this.allOrders.push(this.startingOrderNumber++);

}, 2000);
startOrders(){ this.handle
}

stopOrders(){
  clearInterval(this.handle)
}

}
