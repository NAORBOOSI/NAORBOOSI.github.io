import { Component, OnInit } from '@angular/core';
import{ DataSource } from '@angular/cdk/collections'

import { Person } from '../../model/person';
import { Parents  } from '../../model/parents';

import { Customer } from '../../customer';
import { CustomerService } from "../../customer.service";
import { DataStorageService } from '../../data-storage.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent implements OnInit {
  [x: string]: any;
  dataSource = new customerDataSource(this.customerService);
  displayedColumns: string[] = ['position', 'name', 'lastName', 'Id'];

 
  customers: Observable<Customer[]>;
  parents: Observable<Parents[]>;

  parent: Parents;

  constructor(private customerService: CustomerService,private dataService: CustomerService,dataStorage:DataStorageService) { }

  ngOnInit() {
    this.reloadData ;
  }


  private searchParent(){
    
    this.dataService.getByFirstName(this.firstName)
    .subscribe(parents=> this.parent = this.parent)
  }
 
  onSubmit(){
    this.searchParent();
  }
  deleteCustomers() {
    this.customerService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }
 
  reloadData() {
    this.customers = this.customerService.getChildrenList();
  }
}
export class customerDataSource extends DataSource<any>{
 
  constructor(private customerService: CustomerService){
    super();
  }
  connect():Observable<Parents[]>{
    return this.customerService.getByFirstName(this.customerService);
  }
  disconnect(){
  
  }
  }