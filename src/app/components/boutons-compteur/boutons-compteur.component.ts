import { Component } from '@angular/core';

@Component({
  selector: 'app-boutons-compteur',
  templateUrl: './boutons-compteur.component.html',
  styleUrls: ['./boutons-compteur.component.css']
})
export class BoutonsCompteurComponent {

  count = 0;


  decrement() {

    this.count = this.count-1;

  }

  increment() {

    this.count = this.count+1;

  }


}
