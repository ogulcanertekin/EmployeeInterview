import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';
import { EmployeeService } from '../services/employee.service'

@Component({
  selector: 'app-display-employees',
  templateUrl: './display-employees.component.html',
  styleUrls: ['./display-employees.component.css']
})
export class DisplayEmployeesComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    const employees = this.empService.getEmployees();
    this.employees = employees;
  }

}
