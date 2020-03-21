import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleCharts } from 'google-charts';
import { ChartService } from '../../services/chart.service';
import { TestService } from '../../services/test.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.less']
})
export class ChartComponent implements OnInit {
  chartData: any;
  testData: any;
  @ViewChild('myname') input;

  constructor(
    private chartService: ChartService,
    private testService: TestService
  ) { }

  ngOnInit() {
    //console.log(document.getElementById('chart1'));
    this.getChartDatas();
    this.getTestDatas();
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
 
  getTestDatas() {
    var self = this;
    this.testService.getDatas()
      .subscribe(data => {
        this.testData = data.stats;
        var tests = data.data;
        GoogleCharts.load(function () {
          self.drawChart2(tests);
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
        chartArea:{left:40,top:20, right:20},
        vAxis: {minValue: 0}
      };
 

      window.setTimeout(function () {
        const areaChart = new GoogleCharts.api.visualization.AreaChart(document.getElementById('chart1'));
        areaChart.draw(data, options);

      }, 200);
    }
  }

  drawChart2(datas) { 
    if (datas) {
      const data = GoogleCharts.api.visualization.arrayToDataTable(datas);
 
      var options = { 
        legend: 'none',
        chartArea:{left:40,top:20, right:20},
        vAxis: {minValue: 0}
      };
    

      window.setTimeout(function () {
        const columnChart = new GoogleCharts.api.visualization.ColumnChart(document.getElementById('chart2'));
        columnChart.draw(data, options);

      }, 200); 
    }
  }     

}
