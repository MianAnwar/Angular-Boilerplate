export class TextAccordionItem {
  constructor(question?: string, answer?: string, id?: string) {
    this.question = question;
    this.answer = answer;
    this.id = id;
  }

  question?: string;

  answer?: string;

  id?: string;
}
