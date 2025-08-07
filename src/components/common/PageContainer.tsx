export const PageContainer = ({
  error,
  isLoading,
  children,
  refetch,
}: PageContainerProps<Error | null>) => {
  if (isLoading) {
    return (
      <p data-testid="page-container-loading" style={{ textAlign: 'center', padding: '2rem' }}>
        Loading...
      </p>
    );
  }

  if (error) {
    return (
      <div data-testid="page-container-error" style={{ textAlign: 'center', color: 'red' }}>
        <h2>Something went wrong</h2>
        <pre data-testid="page-container-error-message">{error?.message}</pre>
        <button onClick={refetch}>Try again</button>
      </div>
    );
  }

  return <div data-testid="page-container-content">{children}</div>;
};
