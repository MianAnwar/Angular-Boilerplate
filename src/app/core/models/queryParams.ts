import { HttpParams } from '@angular/common/http';

export class QueryParams {
  constructor(key: string, value: string | number) {
    this.key = key;
    this.value = value;
  }

  key: string;

  value: string | number;
}

export const getQueryParams = (queryParams: QueryParams[]): HttpParams => {
  let params = new HttpParams();

  for (const param of queryParams) {
    params = params.append(param.key, param.value);
  }

  return params;
};
