import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CustomerService } from "../../customer.service";
import { Parents } from '../../model/parents';




@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  parent: Observable<Parents[]>;

  constructor(private customerService: CustomerService){ }

  

  ngOnInit() {
    this.reloadData();
  }
  deleteCustomers(){
    this.customerService.deleteAll()
    .subscribe(
      data=>{
        console.log(data);
        this.reloadData();
      },
      error => console.log('ERROR: '+error));
  }


 reloadData(){
        this.parent=this.customerService.getParentsList();
      }
    }