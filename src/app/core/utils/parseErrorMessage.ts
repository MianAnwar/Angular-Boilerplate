export class ErrorMessage {
  errors!: Message[];
}
class Message {
  message!: string;
}
export const parseErrorMessage = (errorMessages: ErrorMessage) => {
  const errorList = errorMessages.errors.map((x) => x.message);
  return errorList.join('\n');
};
