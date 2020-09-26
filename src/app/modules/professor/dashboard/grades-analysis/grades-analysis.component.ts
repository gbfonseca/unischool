import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grades-analysis',
  templateUrl: './grades-analysis.component.html',
  styleUrls: ['./grades-analysis.component.css']
})
export class GradesAnalysisComponent implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          id: 'discipline',
          scaleLabel: {
            labelString: 'Disciplina',
            display: true
          }
        }
      ],
      yAxes: [
        { id: 'Notas',
          type: 'linear',
          position: 'left',
          ticks: { 
            min: 0,
            max: 10 ,
          },
          scaleLabel: {
            labelString: 'Nota',
            display: true
          }
        }, 
      ]
    }
  };

  barChartLabels: Label[] = ['Desenvolvimento Web', 'Circuitos Digitais', 'Análise e Projeto de Sistemas'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    {
      label: 'AV 1',
      data: [4, 7.5, 9]
    },
    {
      label: 'AV 2',
      data: [7, 6, 8]
    },
    {
      label: 'Média',
      data: [7, 6, 7.3]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
