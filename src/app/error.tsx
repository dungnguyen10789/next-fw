'use client';

const GlobalError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()} style={{ marginTop: '1rem' }}>
        Try again
      </button>
    </div>
  );
};

GlobalError.displayName = 'Page.Global.GlobalError';

export default GlobalError;
