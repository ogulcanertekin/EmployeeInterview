import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private empService: EmployeeService) { }

  employeeCreateForm: FormGroup;
  createdEmployee: Employee;

  ngOnInit() {
    this.createEmployeeForm();
  }

  createEmployeeForm() {
    this.employeeCreateForm = this.formBuilder.group(
      {
        userFirstName: ['', [Validators.required,
        Validators.maxLength(16)]],
        userLastName: ['', [Validators.required,
        Validators.maxLength(16)]],
        departmentName: ['', Validators.required]
      }
    );
  }

  createEmployee() {
    if (this.employeeCreateForm.valid) {
      this.createdEmployee = Object.assign({}, this.employeeCreateForm.value);
      this.empService.addEmployee(
        this.createdEmployee.userFirstName,
        this.createdEmployee.userLastName,
        this.createdEmployee.departmentName
      );
    }
  }

}
