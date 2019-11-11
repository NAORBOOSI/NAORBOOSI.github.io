import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

        createChildResponse:BehaviorSubject<String> = new BehaviorSubject <String>("");
        CreateParentsResponse:BehaviorSubject<String> = new BehaviorSubject <String>("");
        CreateKindergartenResponse:BehaviorSubject<String> = new BehaviorSubject <String>("");

      public setCreateChildResponse (res:string):void{
        this.createChildResponse.next(res);
      };
      public getCreateChildResponse():BehaviorSubject<String>{
        return this.createChildResponse;
      };
      public setCreateParentsResponse (res:string):void{
        this.CreateParentsResponse.next(res);
      };
      public getCreateParentsResponse():BehaviorSubject<String>{
        return this.CreateParentsResponse;
      };
      public setCreateKindergartenResponse (res:string):void{
        this.CreateKindergartenResponse.next(res);
      };
      public getCreateKindergartenResponse():BehaviorSubject<String>{
        return this.CreateKindergartenResponse;
      };

  
  constructor() { }
}
