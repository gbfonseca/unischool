import { RegisterGradeComponent } from './dashboard/register-grade/register-grade.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GradesComponent } from './dashboard/grades/grades.component';
import { GradesAnalysisComponent } from './dashboard/grades-analysis/grades-analysis.component';

const routes: Routes = [
  {
    path: 'professor',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'notas'
      },
      {
        path: 'notas',
       component: GradesComponent
      },
      {
        path: 'cadastrar-nota',
        component: RegisterGradeComponent
      },
      {
        path: 'notas/editar-nota',
        component: RegisterGradeComponent
      },
      {
        path: 'analisar-notas',
        component: GradesAnalysisComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
