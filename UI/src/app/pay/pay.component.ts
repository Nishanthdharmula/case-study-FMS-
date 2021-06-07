import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
import { Fare } from '../fare';
import { PayService } from '../pay.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  bookingfare: number;
  fare: Fare = new Fare();

  constructor(private payService: PayService, private bookingservice: BookingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fare = new Fare();
    this.bookingfare = this.route.snapshot.params['bookingfare'];
    console.log(this.bookingfare);
    this.options.amount = this.bookingfare * 100;
  }

 options = {
    "key": "rzp_test_jbYjdSlqTsJ2j1", 
    "amount": 50000, 
    "currency": "INR",
    "name": "Acme crop",
    "description": "Payment",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Razorpay_logo.svg/1896px-Razorpay_logo.svg.png",
    "order_id": "", 
    //"callback_url": "https://eneqd3rpzrjok.x.pipedream.net",
    //"callback_url": "http://localhost:4200/try",
    /*"handler": function (response:any){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },*/
    "prefill": {
        "name": "Dharmula Nishanth",
        "email": "nishanth@example.com",
        "contact": "9454545459"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};

rzp1:any;
pay(){
  //this.options.amount= "276000"
  //this.options.order_id= this.id
  this.rzp1 = new this.payService.nativeWindow.Razorpay(this.options);

  this.rzp1.open();
}

}
