import { SharedModule } from './../../shared/shared.module';
import { StudentRoutingModule } from './student-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GradesComponent } from './dashboard/grades/grades.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [DashboardComponent, GradesComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class StudentModule { }
