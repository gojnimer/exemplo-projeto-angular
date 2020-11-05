import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'title-header',
  templateUrl: './title-header.component.html',
  styleUrls: ['./title-header.component.css']
})
export class TitleHeaderComponent implements OnInit {

  constructor() { }

  @Input() titulo:string;
 
  @Input() isRouting:boolean = false; 

  @Input() RoutingPath:string = "new";

  @Input() backArrow:boolean;

  @Input() backArrowRoutingPath: string = '..';

  @Input() newBtn:boolean = false;

  @Input() newBtnTitulo = "+ Novo"
  
  @Output() newBtnEvent = new EventEmitter<MouseEvent>();



  ngOnInit() {
    
  }

  

}
