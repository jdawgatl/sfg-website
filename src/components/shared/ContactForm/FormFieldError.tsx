
type FormFieldErrorProps = {
  message: string;
};

export const FormFieldError = ({ message }: FormFieldErrorProps) => {
  return <span className="text-red-500 text-sm">{message}</span>;
};
