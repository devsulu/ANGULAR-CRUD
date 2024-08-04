import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }
  api="https://localhost:7268"
  public saveEmployee(employee:Employee):Observable<Employee>{
    
    return this.httpClient.post<Employee>(`${this.api}/api/employee`,employee);
  }
  public getEmployees():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.api}/api/employee`);
  }
  public deleteEmployee(employeeId: number): Observable<any> {
  return this.httpClient.delete(`${this.api}/api/employee/${employeeId}`);
}
public getEmployee(employeeId:number){
  return this.httpClient.get<Employee>(`${this.api}/api/employee/${employeeId}`);
}
  public updateEmployee(employee:Employee){
    return this.httpClient.put<Employee>(`${this.api}/api/employee`,employee);
  }
} 

 