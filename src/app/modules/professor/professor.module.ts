import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorRoutingModule } from './professor-routing.module';
import { RegisterGradeComponent } from './dashboard/register-grade/register-grade.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GradesComponent } from './dashboard/grades/grades.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GradesAnalysisComponent } from './dashboard/grades-analysis/grades-analysis.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    DashboardComponent,
    RegisterGradeComponent,
    GradesComponent,
    GradesAnalysisComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ProfessorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ChartsModule
  ]
})
export class ProfessorModule { }
