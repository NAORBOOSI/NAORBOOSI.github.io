import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './component/create-customer/create-customer.component';
import { CustomersListComponent } from './component/customers-list/customers-list.component';
import { SearchCustomerComponent } from './component/search-customer/search-customer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CreateParentsComponent } from './component/create-parents/create-parents.component';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { ListChildrenComponent } from './component/list-children/list-children.component';
import { ListParentsComponent } from './component/list-parents/list-parents.component';
import {MatTableModule} from '@angular/material/table';
import { CustomerService } from  './customer.service'
import {MatSortModule} from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import { HomePageComponent } from './component/home-page/home-page.component';
import { TeacherComponent } from './component/teacher/teacher.component';
import { ListKinderComponent } from './component/list-kinder/list-kinder.component';
import { ParentsComponent } from './component/parents/parents.component';
import { ChildrenComponent } from './component/children/children.component';
import { KindergartenComponent } from './component/create-kindergarten/kindergarten.component';
import { KinderComponent } from './component/kinder/kinder.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ProfileComponent } from './component/profile/profile.component';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CustomersListComponent,
    SearchCustomerComponent,
    CreateParentsComponent,
    ListChildrenComponent,
    ListParentsComponent,
    HomePageComponent,
    KindergartenComponent,
    TeacherComponent,
    ListKinderComponent,
    ParentsComponent,
    ChildrenComponent,
    KinderComponent,
    ProfileComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule

  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
