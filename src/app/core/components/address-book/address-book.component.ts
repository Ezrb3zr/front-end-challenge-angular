import { Component, OnInit } from '@angular/core';
import { Address } from '../../../../../server/address/address';
import { AddressBookService } from './address-book.service';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit {
  addresses: Address[]

  constructor(private service: AddressBookService) { }

  ngOnInit() {
    this.service.getAddresses()
    .subscribe((result: Object) =>{ 
      this.addresses = JSON.parse(JSON.stringify(result));
      console.log(this.addresses);
    });
  }

}
