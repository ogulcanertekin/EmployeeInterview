import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private employees: Employee[];

  constructor() {
    let employees = this.getEmployees();
  }

  public addEmployee(userFirstName: string, userLastName: string, departmentName: string): void {
    let employee = new Employee(userFirstName, userLastName, departmentName);
    let employees = this.getEmployees();
    employees.push(employee);
    this.setLocalStorageEmployees(employees);
    console.log(employees);
  }

  public getEmployees(): Employee[] {
    let localStorageEmployeeItem = JSON.parse(localStorage.getItem('employees'));
    return localStorageEmployeeItem == null ? [] : localStorageEmployeeItem.employees;
  }

  private setLocalStorageEmployees(employees: Employee[]): void {
    localStorage.setItem('employees', JSON.stringify({ employees: employees }));
  }
}