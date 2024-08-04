import { ActivatedRouteSnapshot,ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Employee } from "./employee.model";
import { EmployeeService } from "./employee.service";
import { inject } from '@angular/core';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

Injectable({
  providedIn: 'root',
})

export const EmployeeResolver: ResolveFn<any>=
( route:ActivatedRouteSnapshot,
  state:RouterStateSnapshot,
  employeeService:EmployeeService=inject(EmployeeService)):Observable<Employee>=>{
   const employeeId=route.paramMap.get("employeeId");

   if(employeeId){
     return employeeService.getEmployee(Number(employeeId));
   }
   else{
         const employee:Employee={
         employeeId: 0,
         employeeName: '',
         employeeContactNumber: '',
         employeeAddress: '',
         employeeGender: '',
         employeeDepartment: '',
         employeeSkills: ''
       }
       return of(employee);
   }
  }

 