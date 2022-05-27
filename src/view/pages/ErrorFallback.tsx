import {FallbackProps} from "react-error-boundary";
import {Button} from '@mui/material'

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const handleClick = () => {
    resetErrorBoundary();
  };

  return (
    <div>
      <p>Что-то пошло не так:</p>
      <pre>{error.message}</pre>
      <Button onClick={handleClick}>Попробуйте перезагрузить</Button>
    </div>
  );
}