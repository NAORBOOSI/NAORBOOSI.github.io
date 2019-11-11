import { NgModule } from '@angular/core';
import { Routes, RouterModule, ROUTES } from '@angular/router';
import { CreateCustomerComponent } from './component/create-customer/create-customer.component';
import { CustomersListComponent } from './component/customers-list/customers-list.component';
import { SearchCustomerComponent } from './component/search-customer/search-customer.component';
import { CreateParentsComponent } from './component/create-parents/create-parents.component';
import { ListParentsComponent } from './component/list-parents/list-parents.component';
import { ListChildrenComponent } from './component/list-children/list-children.component';
import { ParentsComponent } from './component/parents/parents.component';
import { ChildrenComponent } from './component/children/children.component';
import { KindergartenComponent } from './component/create-kindergarten/kindergarten.component';
import { ListKinderComponent } from './component/list-kinder/list-kinder.component';
import { KinderComponent } from './component/kinder/kinder.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ProfileComponent } from './component/profile/profile.component';


const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'list-parents', component: ListParentsComponent },
  { path: 'list-children', component: ListChildrenComponent },
  { path: 'list-kinder', component: ListKinderComponent },
  { path: 'parents', component: ParentsComponent },
  { path: 'children', component: ChildrenComponent },
  { path: 'kinder', component: KinderComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'profile', component: ProfileComponent },


  {path:'kindergarten', component:KindergartenComponent},
  { path: 'addChild', component: CreateCustomerComponent },
  { path: 'addParents', component: CreateParentsComponent },
  { path: 'findByFirstName', component: SearchCustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
