import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Vacancy } from "./models";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  URL: string = 'http://127.0.0.1:8000/api'
  constructor(private http: HttpClient) { }

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.URL}/vacancies/`)
  }

  getVacancy(id: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.URL}/vacancies/${id}/`)
  }

}
