import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataStorageService } from './data-storage.service';
import { Child } from './model/child';
import { Parents } from './model/parents';
import { Kinder } from './model/kinder';
import { error } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  [x: string]: any;
  private baseUrl = 'http://localhost:8080/api';
 


  constructor(private http: HttpClient,private dataStorage:DataStorageService){ }


  getAllParents(): Observable<Parents[]>{
    return this.http.get<Parents[]>(this.baseUrl +'/listParent');
  }
getAllChildren(): Observable<Child[]>{
    return this.http.get<Child[]>(this.baseUrl+'/listAllChildren');
  }
 getAllKindergarten(): Observable<Kinder[]>{
    return this.http.get<Kinder[]>(this.baseUrl+'/listAllKindergarten');
  }
  getByFirstName(parent : any): Observable<any>{
    return this.http.get(this.baseUrl+'/Parents/${firstName}');
  }
  
  createChild(child : Child): void{
    this.http.post(this.baseUrl+'/child',child).subscribe(
      data=>{
        console.log(data);
        
        this.dataStorage.setCreateChildResponse(JSON.stringify(data));
      },
      error=>console.log(error));
    
  }
  uploadImage(any : Child): void{
    this.http.post(this.baseUrl+'/uploadImage',any).subscribe(
      data=>{
        console.log(data);
        
        this.dataStorage.setCreateChildResponse(JSON.stringify(data));
      },
      error=>console.log(error));
    
  }
  createParents(parent : Parents): void{
    this.http.post(this.baseUrl+'/Parents',parent).subscribe(
      data=>{
        console.log(data);
        
        this.dataStorage.setCreateParentsResponse(JSON.stringify(data));
      },
      error=>console.log(error));
    
  }
  searchParent(parent : any){
    return this.http.get(this.baseUrl,parent);
  }
createKinder(kinder: Kinder):void{
  this.http.post(this.baseUrl+'/appendKindergarten',kinder).subscribe(
    data=>{
      console.log(data);
      this.dataStorage.setCreateKindergartenResponse(JSON.stringify(data));
    },
    error=>console.log(error));
  
}



  deleteUser(parentId : string){
    this.http.post(this.baseUrl,parent).subscribe(
      data=>{
        console.log(data);
        
        this.dataStorage.setCreateParentsResponse(JSON.stringify(data));
      },
      error=>console.log(error));
    
  }
  
  createCustomer(customer : any): Observable<any>{
    return this.http.post('${this.baseUrl}/child',customer);
  }
  createCustomer2(customer : any): Observable<any>{
    return this.http.post('${this.baseUrl}/${Parents}',customer);
  }
  createCustomer3(customer : any): Observable<any>{
    return this.http.post('${this.baseUrl}/$Kinder}',customer);
  }
  updateCustomer(parentId :string , value: any):Observable<any>{
    return this.http.put('${this.baseUrl}/${id}' , value);
  }
  delete(parentId : string) : Observable<any>{
     return this.http.delete('${this.baseUrl}/${id}');
   }
  
  getParentsList(): Observable<any>{
    return this.http.get(this.baseUrl);
  }
  getChildrenList(): Observable<any>{
    return this.http.get(this.baseUrl);
  }
 
  deleteAllParent() : Observable<any>{
    return this.http.delete(this.baseUrl+'/parents/delete');
  }
  deleteAllKinder() : Observable<any>{
    return this.http.delete(this.baseUrl+'/Kinder/delete');
  }
 
  deleteAllCildren() : Observable<any>{
    return this.http.delete(this.baseUrl+'/delete');
  }


}
