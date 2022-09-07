interface ErrorBoundaryType {
    error: { message: string},
    resetErrorBoundary: () => void
  }
function ErrorFallback({ error, resetErrorBoundary }: ErrorBoundaryType) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button type="submit" onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default ErrorFallback;
