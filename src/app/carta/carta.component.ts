import { Component, ElementRef, Renderer2, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179.9deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ]),
    trigger('desaparecer', [
      state('inicio', style({ 
        opacity: 1
      })),
      state('fin', style({
        opacity: 0
      })),
      transition('inicio => fin', animate('500ms ease-out')),
      transition('fin => inicio', animate('500ms ease-in'))
    ])    
  ]
})
export class CartaComponent implements OnInit {

  @Input('numeroCarta') numeroCarta: string;
  @ViewChild("carta") carta: ElementRef;
  @Output() flipEvent = new EventEmitter();
  estado : boolean = false;
  flipState: string = 'inactive';
  opacidad: string = 'inicio';

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {

  }
 
  toggleFlip() {
    this.flipState = (this.flipState == 'inactive') ? 'active' : 'inactive';
  }
 
  quitarCarta(){
   this.opacidad = 'fin';
  }

  onAnimationEvent ( event: AnimationEvent ) {
    if(event.phaseName === 'done'){
      if(this.flipState === 'active'){
        this.flipEvent.emit(this);
      }
    }
  }
}
