import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../customer';
import { CustomerService } from '../../customer.service';
import { Parents } from '../../model/parents';
import{ Person } from '../../model/person';
import{ DataSource } from '@angular/cdk/collections'
import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
@Component({
  selector: 'app-list-parents',
  templateUrl: './list-parents.component.html',
  styleUrls: ['./list-parents.component.css']
})

export class ListParentsComponent implements OnInit {
  dataSource = new customerDataSource(this.customerService);
  displayedColumns: string[] = ['position', 'name', 'lastName', 'Id','phoneNumber','emailAdrress','actions'];
  // @ViewChild (MatSort) sort : MatSort;
  

  parents:Parents =new Parents();

  customers: Observable<Customer[]>;
  constructor(private customerService: CustomerService) { }
 
  ngOnInit() {
    this.reloadData();
    // this.reloadData.sort=this.sort;
  }

  details(){
    return this.customerService.getByFirstName;
  }
  deleteCustomers() {
    this.customerService.deleteAllParent()
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
  return this.customerService.getAllParents();
}
disconnect(){

}
}