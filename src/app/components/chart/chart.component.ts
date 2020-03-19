import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleCharts } from 'google-charts';
import { ChartService } from '../../services/chart.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.less']
})
export class ChartComponent implements OnInit {
  chartData: any;
  @ViewChild('myname') input;

  constructor(
    private chartService: ChartService
  ) { }

  ngOnInit() {
    //console.log(document.getElementById('chart1'));
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
 
  onResize(){
     //this.getChartDatas();
  }

  drawChart(datas) { 
    if (datas) {
      const data = GoogleCharts.api.visualization.arrayToDataTable(datas);

      var options = {
        legend: 'none',
        vAxis: {minValue: 0}
      };
 

      window.setTimeout(function () {
        const columnChart = new GoogleCharts.api.visualization.AreaChart(document.getElementById('chart1'));
        columnChart.draw(data, options);

      }, 200);
    }
  }

}
