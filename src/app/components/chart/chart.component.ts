import { Component, OnInit } from '@angular/core';
import { GoogleCharts } from 'google-charts';
import { ChartService } from '../../services/chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.less']
})
export class ChartComponent implements OnInit {
  chartData: any;

  constructor(
    private chartService: ChartService
  ) { }

  ngOnInit() {
    GoogleCharts.load(this.drawChart);
    this.getChartDatas();
  }

  getChartDatas() {
    var self = this;
    this.chartService.getDatas()
      .subscribe(data => {
        this.chartData = data;
        var stats = data.stats;
        GoogleCharts.load(function () {
          self.drawChart(stats);
        });
      });
  }  

  drawChart(datas) {  
    if (datas) {
      const data = GoogleCharts.api.visualization.arrayToDataTable(datas);
      const columnChart = new GoogleCharts.api.visualization.LineChart(document.getElementById('chart1'));
      columnChart.draw(data);
    }
  }

}
