import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {

  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;

  monedas: String[] = ['USD', 'COP', 'EUR', 'LIBRA'];
  constructor() { }

  ngOnInit(): void {
  }

  convertir(): void{
    switch (this.tengo) {
      case 'USD':
        switch(this.quiero){
          case 'COP':
            this.total = this.cantidad*3700;
            break;
          case 'EUR':
            this.total = this.cantidad*0.83;
            break;
          case 'LIBRA':
            this.total = this.cantidad*0.72;
            break;
          default:
            this.total=this.cantidad;
            break;
        }
        break;

      case 'COP':
        switch(this.quiero){
          case 'USD':
            this.total = this.cantidad*0.00027;
            break;
          case 'EUR':
            this.total = this.cantidad*0.00022;
            break;
          case 'LIBRA':
            this.total = this.cantidad*0.00019;
            break;
          default:
            this.total=this.cantidad;
            break;
        }
        break;

      case 'EUR':
        switch(this.quiero){
          case 'USD':
            this.total = this.cantidad*1.21;
            break;
          case 'COP':
            this.total = this.cantidad*4524.73;
            break;
          case 'LIBRA':
            this.total = this.cantidad*0.87;
            break;
          default:
            this.total=this.cantidad;
            break;
        }
        break;
      case 'LIBRA':
        switch(this.quiero){
          case 'USD':
            this.total = this.cantidad*1.39;
            break;
          case 'COP':
            this.total = this.cantidad*5200.72;
            break;
          case 'EUR':
            this.total = this.cantidad*1.15;
            break;
          default:
            this.total=this.cantidad;
            break;
        }
        break;
    }
  }
}
