import { TextAccordionItem } from '../../dashboard/models/text-accordion-item';

export class Faq {
  answer?: string;

  categoryId?: string;

  categoryName?: string;

  id?: string;

  question?: string;

  visible?: string;
}

export class Iterator {
  type?: string;

  data?: TextAccordionItem[];
}
