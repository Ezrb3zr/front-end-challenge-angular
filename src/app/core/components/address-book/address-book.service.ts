import { Injectable } from '@angular/core';
import { AddressService } from 'server/address/address.service';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {

  constructor(
    private backend: AddressService
    ) { }

  getAddresses() {
    return this.backend.getAddresses()
  }
}
