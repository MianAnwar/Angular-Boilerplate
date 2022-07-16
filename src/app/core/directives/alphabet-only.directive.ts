import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[alphabetOnly]'
})

export class AlphabetOnlyDirective {
  key: any;
  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
    this.key = event.key.charCodeAt(0);
    if ((this.key >= 15 && this.key <= 31) || (this.key >= 33 && this.key <= 64) || (this.key == 123) || (this.key >= 125) || (this.key >= 91 && this.key <= 96)) {
      event.preventDefault();
    }
  }
}
