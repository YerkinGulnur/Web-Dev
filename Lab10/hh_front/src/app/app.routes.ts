import { Routes } from '@angular/router';
import { CompanyListComponent } from "./company-list/company-list.component";
import { VacancyListComponent } from "./vacancy-list/vacancy-list.component";
import { CompanyDetailComponent } from "./company-detail/company-detail.component";
import { VacancyDetailComponent } from "./vacancy-detail/vacancy-detail.component";
import { TopTenComponent } from "./top-ten/top-ten.component";
import { TopBarComponent } from './top-bar/top-bar.component';

export const routes: Routes = [
  {path: '', redirectTo: 'companies', pathMatch: 'full'},
  {path: 'companies', component: CompanyListComponent, title: 'companies'},
  {path: '', component: TopBarComponent, outlet: 'top bar'},
  {path: 'vacancies', component: VacancyListComponent, title: 'vacancies'},
  {path: 'top_ten', component: TopTenComponent, title: 'categories'},
  {path: 'companies/:id/vacancies', component: CompanyDetailComponent, title: 'company detail'},
  {path: 'vacancies/:id', component: VacancyDetailComponent, title: 'vacancy detail'},
];


