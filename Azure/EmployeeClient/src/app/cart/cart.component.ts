import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';
import { environment } from '../../environments/environment';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  webApi: string;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.webApi = environment.apiUrl + "/home/productsall"; 
    // this.webApi = "https://cat-fact.herokuapp.com/facts/";
  }

  ngOnInit(): void {
    fetch(this.webApi)
      .then(console.log);
  }

  onSubmit(): void {
    console.log(this.webApi);
    // Process checkout data here
    // this.items = this.cartService.clearCart();
    // console.warn('Your order has been submitted', this.checkoutForm.value);
    // this.checkoutForm.reset();
  }
}
