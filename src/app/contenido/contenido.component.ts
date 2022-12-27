import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  constructor() {}
  
  
  numero:number = 0;

  incremento(){
    this.numero = this.numero + 1;
  }

  decremento(){
  
    if(this.numero <= 0){
      alert("Son numeros bajos")
    }
    else{
      this.numero = this.numero - 1;
    }
  }


  ngOnInit(): void {
  }

  

}
