import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@ViewChild("meuCanvas") elemento: ElementRef;

  ngOnInit() {
    new Chart(this.elemento.nativeElement, {
      type: 'line',
      data: {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        datasets: [
          {
          data: [50,60,78,95,48,62,14,28,96,78,85,86],
          borderColor: "#0abab5",
          fill: "#c9fcfb"
        }
      ]
    },
    options: {
      legend: {
        display: false
      }
    }
  })
}
};
