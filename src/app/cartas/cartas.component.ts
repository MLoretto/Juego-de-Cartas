import { Component, OnInit, ViewChild ,ElementRef  } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.css'],
  animations: [
    trigger('aparecer', [
      state('inicio', style({
        opacity: 0
      })),
      state('fin', style({
        opacity: 1
      })),
      transition('inicio => fin', animate('500ms ease-out')),
      transition('fin => inicio', animate('500ms ease-in'))
    ])    
  ]
})
export class CartasComponent implements OnInit {
  opacidad: string = 'inicio';
  cartas : string[] = [
    "assets/img/A.png",
    "assets/img/2.png",
    "assets/img/3.png",
    "assets/img/4.png",
    "assets/img/5.png",
    "assets/img/6.png",
    "assets/img/7.png",
    "assets/img/8.png",
    "assets/img/9.png",
    "assets/img/10.png",
    "assets/img/J.png",
    "assets/img/Q.png",
    "assets/img/K.png"]; 

  cartasAzar:string[]=[];
  cartasSeleccionadas:any[]=[];

  constructor() { }

  cartasDesaparecidas:number=0;
  @ViewChild("mensaje") mensaje: ElementRef;


  ngOnInit() {
    this.desordenarPares();
  }
  flipCart(carta){
    if(this.cartasSeleccionadas.length === 1){
      if(carta.numeroCarta === this.cartasSeleccionadas[0].numeroCarta){
        carta.quitarCarta();
        this.cartasSeleccionadas[0].quitarCarta();
        this.cartasSeleccionadas = [];
        this.cartasDesaparecidas += 2;
        if(this.cartasDesaparecidas==8){
          alert("Felicitaciones!!! Completaste el juego!!!");
        }
      }else{
        this.cartasSeleccionadas[0].toggleFlip();
        carta.toggleFlip();
        this.cartasSeleccionadas = [];
      }
    }else{
      this.cartasSeleccionadas.push(carta);
    }
  }

  desordenarPares(){
    let Azar : number[] = this.repartir(0,12,4);
    Azar = Azar.concat(Azar);
    Azar = Azar.sort(function() {return Math.random() - 0.5});
    for(let i=0 ; i< Azar.length ; i++){
      this.cartasAzar.push(this.cartas[Azar[i]]);
    }
  }

  repartir(min:number, max: number, rep :number){
    let arraynum : number[] = [];
    if(max>0){
      let rept = 0;
      let end = 0;
      
      while (rept != -1){
        for(let i=1 ; i<= max ; i++){
          let numaleatorio = Math.floor(Math.random() * (max+1));
          if (arraynum.indexOf(numaleatorio) < 0 && numaleatorio != 0) {
            arraynum.push(numaleatorio);
            end++;
          }
          if(end == rep){
            rept = -1;
            i = max;
          }
        }
      }
    }
    return arraynum;
  }

}
