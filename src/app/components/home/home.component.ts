import { Component, OnInit } from '@angular/core';
import { GoogleCharts } from 'google-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    GoogleCharts.load(this.drawChart);

  }

  drawChart() {

    // Standard google charts functionality is available as GoogleCharts.api after load

    const data = GoogleCharts.api.visualization.arrayToDataTable([
      ['Date', 'Bevestigd', 'Sterfgevallen', 'Hersteld'],
      ['13-03-2020', 1, 0, 0],
      ['14-03-2020', 2, 0, 0],
      ['15-03-2020', 0, 0, 0],
      ['16-03-2020', 0, 0, 0]
    ]);

    // const data = GoogleCharts.api.visualization.arrayToDataTable([
    //   ['', ''],
    //   ['13-03-2020', 1],
    //   ['14-03-2020', 2],
    //   ['15-03-2020', 0],
    //   ['16-03-2020', 0]
    // ]);
    const pie_1_chart = new GoogleCharts.api.visualization.LineChart(document.getElementById('chart1'));
    pie_1_chart.draw(data);
  }

}
