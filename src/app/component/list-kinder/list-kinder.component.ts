import { Component, OnInit } from '@angular/core';
import { Parents } from 'src/app/model/parents';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/customer.service';
import { DataSource } from '@angular/cdk/table';
import { Kinder } from '../../model/kinder';


@Component({
  selector: 'app-list-kinder',
  templateUrl: './list-kinder.component.html',
  styleUrls: ['./list-kinder.component.css']
})
export class ListKinderComponent implements OnInit {

  dataSource = new customerDataSource(this.customerService);
  displayedColumns: string[] = ['position', 'nameKinder', 'adrress', 'phoneNumber','email','actions'];
  // @ViewChild (MatSort) sort : MatSort;
  
kindergarten : Kinder = new Kinder();

  kinder: Observable<Kinder[]>;
//  parents : Observable<Parents[]>;
  constructor(private customerService: CustomerService) { }
 
  ngOnInit() {
    this.reloadData();
    // this.reloadData.sort=this.sort;
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
    this.kinder = this.customerService.getAllKindergarten();
  }

}
export class customerDataSource extends DataSource<any>{
 
constructor(private customerService: CustomerService){
  super();
}
connect():Observable<Kinder[]>{
  return this.customerService.getAllKindergarten();
}
disconnect(){

}
}