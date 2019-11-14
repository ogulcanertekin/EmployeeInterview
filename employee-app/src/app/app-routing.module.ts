import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateEmployeeComponent} from '../app/employees/create-employee.component';
import {DisplayEmployeesComponent} from '../app/employees/display-employees.component';


const routes: Routes = [
  {path: 'employees', component: DisplayEmployeesComponent},
  {path: 'create', component: CreateEmployeeComponent},
  {path: '', redirectTo: '/employees', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
