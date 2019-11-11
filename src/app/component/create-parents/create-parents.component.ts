import { Component, OnInit } from '@angular/core';
import { Parents } from '../../model/parents';
import { CustomerService } from '../../customer.service';
import { DataStorageService } from '../../data-storage.service';
import { Customer } from '../../customer';
import { from } from 'rxjs';

@Component({
  selector: 'app-create-parents',
  templateUrl: './create-parents.component.html',
  styleUrls: ['./create-parents.component.css']
})
export class CreateParentsComponent implements OnInit {
  customer: Customer=new Customer();
submitted= false;
parent: Parents = new Parents();
parentsResponse:String="welcome"

  constructor(private customerService : CustomerService,private dataStorage:DataStorageService ) { }

  ngOnInit() {
this.dataStorage.getCreateParentsResponse().subscribe(
  t =>{
    this.parentsResponse = t;
  }
)
  }


  createParent(): void{
    this.customerService.createParents(this.parent)

  }
  newCustomer(): void{
    this.submitted = false;
    this.customer=new Customer;
  }

  save(){
    this.customerService.createCustomer2(this.customer)
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


