import { Component, OnDestroy, OnInit, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar-graph',
  templateUrl: './horizontal-bar-graph.component.html',
  styleUrls: ['./horizontal-bar-graph.component.css']
})
export class HorizontalBarGraphComponent implements OnDestroy {

  results: any[] = [
    {
      "name": "Juego 1",
      "value": 20
    },
    {
      "name": "Juego 2",
      "value": 10
    },
    {
      "name": "Juego 3",
      "value": 1
    },
    {
      "name": "Juego 4",
      "value": 55
    }
  ];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Juegos';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Votos';

  colorScheme : string = 'nightLights';
  schemeType: string = 'ordinal';

  interval: any;

  constructor() {


    this.interval = setInterval( () => {

      const newResults = [...this.results];

      console.log('hey');
      for (let i in newResults) {
        newResults[i].value = Math.round( Math.random() * 100);
      }
      this.results = newResults;
    }, 1500 );
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
