import { Component, OnInit } from '@angular/core';
import { TopBarComponent } from "../top-bar/top-bar.component";
import { Vacancy } from "../models";
import { VacancyService } from "../vacancy.service";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-vacancy',
  standalone: true,
  imports: [
    TopBarComponent,
    RouterModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css'
})
export class VacancyListComponent implements OnInit{
  vacancies: Vacancy[] = [];

  constructor(private vacancyService: VacancyService) {}

  ngOnInit(): void {
    this.getVacancies();
  }

  getVacancies(): void {
    this.vacancyService.getVacancies().subscribe(vacancies => {
      this.vacancies = vacancies
    });
  }
}
