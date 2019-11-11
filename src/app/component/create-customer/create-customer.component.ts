import { Component, OnInit } from '@angular/core';

import { Customer } from '../../customer';
import { CustomerService } from "../../customer.service";
import { Child } from '../../model/child';
import { DataStorageService } from '../../data-storage.service';
import { HttpClient } from '@angular/common/http';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
customer: Customer=new Customer();
submitted= false;
child:Child =new Child();
childResponse:String="kuku";
selectedFile: File=null;
  constructor(private customerService : CustomerService,private dataStorage:DataStorageService,
    private http:HttpClient) { }

  ngOnInit() {
      this.dataStorage.getCreateChildResponse().subscribe(
      t =>{
        this.childResponse = t;
      }
    )
  }

  createChild(): void{

      // child.firstName="azarya";
    this.child.birthDate="1/1/1111";
    this.customerService.createChild(this.child);
  }
  newCustomer(): void{
    this.submitted = false;
    this.customer=new Customer;
  }

  save(){
    this.customerService.createCustomer(this.customer)
    .subscribe(
      data=>{
        console.log(data);
        this.submitted = true;
      },
      error=>console.log(error));
    this.customer=new Customer;
      
    
  }
  onFileSelected(event){
    this.selectedFile=<File>event.target.files[0];

  }
  onUpload(){
    const fd=new FormData();
    fd.append('image',this.selectedFile,this.selectedFile.name);
this.http.post('http://localhost:8080/api/uploadImage',fd)
.subscribe(res=>{
  console.log(res);
})

  }
onSubmit(){
  this.save();
}
}
