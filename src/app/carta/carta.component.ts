import { Component, ElementRef, Renderer2, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  @Input('numeroCarta') numeroCarta: string;
  estado : boolean = false;

  @ViewChild("carta") carta: ElementRef;
  constructor(private renderer: Renderer2) {
    //this.numeroCarta = 'assets/img/A.png';
  }



  ngOnInit() {

  }

  flip(){
    this.carta.nativeElement.classList.toggle('is-flipped');
    if(this.estado){
      this.estado = false;
    }
    else{
      this.estado = true;
    }
  }
}
