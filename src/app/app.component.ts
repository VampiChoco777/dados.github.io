import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dados';
  dadoIzquierdo = '../assets/img/dice_1.png';
  dadoDerecho = '../assets/img/dice_4.png';
  numero1: number = 0;
  numero2: number = 0;
  tirarDados(): void
  {
    this.numero1=Math.round(Math.random()*5)+1;
    this.numero2=Math.round(Math.random()*5)+1;
    this.dadoIzquierdo = '../assets/img/dice_'+this.numero1+'.png';
    this.dadoDerecho = '../assets/img/dice_'+this.numero2+'.png';
  }
}
