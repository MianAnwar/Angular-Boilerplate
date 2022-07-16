export class Option {
  constructor(value: string, display: string) {
    this.value = value;
    this.display = display;
  }

  value: string | number;

  display: string;
}
