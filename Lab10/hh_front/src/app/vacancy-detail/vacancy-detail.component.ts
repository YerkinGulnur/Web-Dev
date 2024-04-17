import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Company, Vacancy} from "../models";
import {CompanyService} from "../company.service";
import {VacancyService} from "../vacancy.service";
import {TopBarComponent} from "../top-bar/top-bar.component";

@Component({
  selector: 'app-vacancy-detail',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    TopBarComponent,
  ],
  templateUrl: './vacancy-detail.component.html',
  styleUrl: './vacancy-detail.component.css'
})
export class VacancyDetailComponent implements OnInit{
  vacancy: Vacancy = {} as Vacancy;

  constructor(
    private route: ActivatedRoute,
    private vacancyService: VacancyService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.get('id')) {
        const id = Number(params.get('id'));
        this.vacancyService.getVacancy(id).subscribe((vacancy) => {
          this.vacancy = vacancy;
        });
      }
    });
  }
}
