import {Component, OnInit} from '@angular/core';
import {Company, Vacancy} from "../models";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {CompanyService} from "../company.service";
import {TopBarComponent} from "../top-bar/top-bar.component";

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    TopBarComponent,
  ],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css'
})
export class CompanyDetailComponent implements OnInit {
  company: Company = {} as Company;
  vacancies: Vacancy[] = [];

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.get('id')) {
        const id = Number(params.get('id'));
        this.companyService.getCompany(id).subscribe((company) => {
          this.company = company;
          this.getCompanyVacancies(id);
        });
      }
    });
  }
  getCompanyVacancies(companyId: number): void {
    this.companyService.getCompanyVacancies(companyId)
      .subscribe(vacancies => this.vacancies = vacancies);
  }
}
