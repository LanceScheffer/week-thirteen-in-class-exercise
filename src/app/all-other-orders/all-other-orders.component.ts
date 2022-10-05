import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-other-orders',
  templateUrl: './all-other-orders.component.html',
  styleUrls: ['./all-other-orders.component.css']
})
export class AllOtherOrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  allOrders = []

  startingOrderNumber = 6;

 startOrders(){
  setInterval(() => {
  this.allOrders.push(this.startingOrderNumber++);
}, 2000);

}
}
