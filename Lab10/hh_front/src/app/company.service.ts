import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Company, Vacancy} from "./models";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  URL: string = 'http://127.0.0.1:8000/api'
  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.URL}/companies/`)
  }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.URL}/companies/${id}/`)
  }

  getCompanyVacancies(id: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.URL}/companies/${id}/vacancies/`)
  }
}
