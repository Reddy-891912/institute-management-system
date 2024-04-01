import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsDataService {

  constructor(private _httpClient: HttpClient) { }

  studentForm(data: any): Observable<any> {
    return this._httpClient.post("https://62abe711bd0e5d29af16f450.mockapi.io/Students", data);
  }

  getStudentsData(data: any): Observable<any> {
    return this._httpClient.get("https://62abe711bd0e5d29af16f450.mockapi.io/Students", data);
  }

  getDeleteData(id: string): Observable<any> {
    return this._httpClient.delete("https://62abe711bd0e5d29af16f450.mockapi.io/Students/" + id)
  }

  getFilterStudentsData(studentFilter: any): Observable<any> {
    return this._httpClient.get("https://62abe711bd0e5d29af16f450.mockapi.io/Students?filter=" + studentFilter)
  }

  getPagedStudentsData(pageNo: number): Observable<any> {
    return this._httpClient.get("https://62abe711bd0e5d29af16f450.mockapi.io/Students?limit=5&page=" + pageNo)
  }

  getSortedColumns(column: string, order: string): Observable<any> {
    return this._httpClient.get("https://62abe711bd0e5d29af16f450.mockapi.io/Students?sortBy=" + column + "&order" + order);
  }
}
