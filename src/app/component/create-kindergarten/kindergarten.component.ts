import { Component, OnInit } from '@angular/core';
import { Kinder } from '../../model/kinder';
// import { CustomerService } from '../customer.service';
// import { DataStorageService } from '../data-storage.service';
import { from } from 'rxjs';
import { CustomerService } from 'src/app/customer.service';
import { DataStorageService } from 'src/app/data-storage.service';
import { Customer } from 'src/app/customer';
@Component({
  selector: 'app-kindergarten',
  templateUrl: './kindergarten.component.html',
  styleUrls: ['./kindergarten.component.css']
})
export class KindergartenComponent implements OnInit {
  kindergarten : Kinder =new Kinder();
  submitted= false;
  customer: Customer=new Customer();

  kinderResponse : String="welcome";
  constructor(private customerService : CustomerService, private dataStorage: DataStorageService) { }

  ngOnInit() {
    this.dataStorage.getCreateChildResponse().subscribe(
      t =>{
        this.kinderResponse= t;
    
  }
    )
}
createKinder(){
  this.customerService.createKinder(this.kindergarten)
}

newCustomer(): void{
  this.submitted = false;
  this.customer=new Customer;
}

save(){
  this.customerService.createCustomer3(this.customer)
  .subscribe(
    data=>{
      console.log(data);
      this.submitted = true;
    },
    error=>console.log(error));
  this.customer=new Customer;
    
  
}

onSubmit(){
  this.save();
}

}