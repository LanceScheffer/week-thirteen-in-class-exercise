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
   startingOrderNumber = 1;

  eachOrder = setInterval(() => {
    //if statement to keep timer from starting right away,
  if(this.showOrder !== !setInterval)
    //allOrders array is linked to a ngForloop (html line 4)
  //pushes startingOrderNumber value through allOrders array
  //   ++ adds the next number to startingOrderNumber value
  this.allOrders.push(this.startingOrderNumber++);

}, 2000);
 startOrders(){
  // startOrders is a click function, that triggers the setInterval
  //function. The setInterval(), stored inside of the eachOrder property
   this.showOrder = !this.showOrder; this.eachOrder
}

 stopOrders(){
  //clearInterval stops the loop. (line 4 html)
  clearInterval(this.eachOrder)
}

}
