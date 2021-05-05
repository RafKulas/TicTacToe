import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button [disabled]="disabled">
      {{value}}
    </button>
  `,
  styles: [
    'button {' +
    'height: 100%;' +
    'width: 100%' +
    '}}'
  ]
})
export class SquareComponent {

  @Input()
  disabled: boolean;
  @Input()
  value: 'X' | 'O';

}
