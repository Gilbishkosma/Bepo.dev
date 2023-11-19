interface ErrorProp {
  message: string | undefined;
}

const ErrorMessage = ({ message }: ErrorProp) => {
  return (
    <span className='mt-1 text-sm text-error'>
      {message || 'This is required'}
    </span>
  );
};

export default ErrorMessage;
