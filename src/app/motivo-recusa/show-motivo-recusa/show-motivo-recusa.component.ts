import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-show-motivo-recusa',
  templateUrl: './show-motivo-recusa.component.html',
  styleUrls: ['./show-motivo-recusa.component.css']
})
export class ShowMotivoRecusaComponent implements OnInit, OnDestroy {
  
  id:string = "";
  routeObs:Subscription;
  title = "Consulta Motivo Recusa";

  motivoRecusa: any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.routeObs = this.route.params.subscribe(param => this.id = param.id);
    this.motivoRecusa = {
      codigoMotivo: "71",
      descMotivo: "ERRO ACESSO PARAMETRO DO PRODUTO NO BCPP",
      status: "1 - ATIVO",
      usuarioResponsavel: "Guilherme Nimer",
      data: "20/12/2016 08:54:34"


    }
  }

  ngOnDestroy(){
    this.routeObs.unsubscribe();
  }

}
