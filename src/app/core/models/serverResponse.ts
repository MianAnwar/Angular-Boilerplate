export class ServerReponseData<T> {
  results?: Data<T>;
}

export class Data<T> {
  message?: string;

  data?: T;
}

export class ServerReponseDataItems<T> {
  results?: DataItem<T>;
}

export class DataItem<T> {
  message?: string;

  dataItems?: T;
}
