import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer';
import { Observable } from 'rxjs';
import { CustomerService } from '../../customer.service';
import { Child } from '../../model/child';
import{ DataSource } from '@angular/cdk/collections'
import{ Person } from '../../model/person';

@Component({
  selector: 'app-list-children',
  templateUrl: './list-children.component.html',
  styleUrls: ['./list-children.component.css']
})
export class ListChildrenComponent implements OnInit {

  dataSource = new customerDataSource(this.customerService);
  displayedColumns: string[] = ['position', 'name', 'lastName', 'Id','pic'];
  

  customers: Observable<Customer[]>;
 child : Observable<Child[]>;
  constructor(private customerService: CustomerService) { }
 
  ngOnInit() {
    this.reloadData();
  }

  
  deleteCustomers() {
    this.customerService.deleteAllKinder()
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
connect():Observable<Child[]>{
  return this.customerService.getAllChildren();
}
disconnect(){

}
}