import { Component } from '@angular/core';

@Component({
  selector: 'app-novo-teste',
  templateUrl: './novo-teste.component.html',
  styleUrls: ['./novo-teste.component.scss']
})
export class NovoTesteComponent {

  fillerNav = Array.from({length: 8}, (_, i) => `Nav Item teste tamanho  ${i + 1}`);

}
