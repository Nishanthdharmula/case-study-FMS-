import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import  Swal  from 'sweetalert2';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer: Customer = new Customer();

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  saveCustomer(){
    this.customerService.createCustomer(this.customer).subscribe( data => {
      console.log(data);
      this.gotoCustomerDetails();
    },
    error => console.log(error));
  }

  gotoCustomerDetails(){
    this.router.navigate(['./Customer'])
  }

  onSubmit(){
    console.log(this.customer);
    this.saveCustomer();

}

opensweetalert(){
  Swal.fire({
    title: 'Are you sure?',
    text: 'continue for payment',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'ok',
    cancelButtonText: 'cancel'
  }).then((result) => {
    if (result.isConfirmed) {
      this.router.navigate(["/pay"]);
    
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      
    }
  })
}

}
