import { Component, OnInit } from '@angular/core';
import { TopBarComponent } from "../top-bar/top-bar.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Vacancy } from "../models";
import {VacancyService} from "../vacancy.service";

@Component({
  selector: 'app-top-ten',
  standalone: true,
  imports: [
    TopBarComponent,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './top-ten.component.html',
  styleUrl: './top-ten.component.css'
})
export class TopTenComponent implements OnInit{
  topTenVacancies: Vacancy[] = [];

  constructor(private vacancyService: VacancyService) {}

  ngOnInit(): void {
    this.getTopTenVacancies();
  }

  getTopTenVacancies(): void {
    this.vacancyService.getVacancies().subscribe(vacancies => {
      vacancies.sort((a, b) => parseFloat(b.salary) - parseFloat(a.salary));
      this.topTenVacancies = vacancies.slice(0, 10);
    });
  }
}
