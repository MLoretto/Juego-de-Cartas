import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.css']
})
export class CartasComponent implements OnInit {

  cartas : string[] = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]; 

  constructor() { }

  ngOnInit() {
    
  }

}
