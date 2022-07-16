export class RecurringTransaction {
  constructor(type: string, period?: string) {
    this.type = type;
    this.period = period;
  }

  type: string;

  period?: string | number;
}
