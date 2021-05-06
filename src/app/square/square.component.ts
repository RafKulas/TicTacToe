import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton status={{status}} [disabled]="disabled">
      {{value}}
    </button>
  `,
  styles: [
    'button {' +
    'height: 100%;' +
    'width: 100%;' +
    'font-size: 5em !important;' +
    '}}'
  ]
})
export class SquareComponent {

  @Input()
  disabled: boolean;
  @Input()
  value: 'X' | 'O';

  get status() {
    return this.value ? (this.value === 'X' ? 'success' : 'danger') : 'basic';
  }

}
