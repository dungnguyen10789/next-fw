'use client';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>404 - Page Not Found</h1>
      <p>We couldn’t find what you’re looking for.</p>
    </div>
  );
};

NotFound.displayName = 'Page.Global.NotFound';

export default NotFound;
