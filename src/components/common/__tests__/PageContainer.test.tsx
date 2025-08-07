import { render, screen } from '@testing-library/react';

import { PageContainer } from '../PageContainer';

describe('PageContainer', () => {
  it('renders loading state', () => {
    render(
      <PageContainer isLoading>
        <div>Data</div>
      </PageContainer>
    );
    expect(screen.getByTestId('page-container-loading')).toBeInTheDocument();
  });

  it('renders error state', () => {
    const failedMessage = 'This is a pseudo error message';
    render(
      <PageContainer error={{ message: failedMessage, name: failedMessage }}>
        <div>Data</div>
      </PageContainer>
    );
    expect(screen.getByTestId('page-container-error')).toBeInTheDocument();
    expect(screen.getByTestId('page-container-error-message')).toHaveTextContent(failedMessage);
  });

  it('renders children when no loading or error', () => {
    render(
      <PageContainer>
        <div>Hello</div>
      </PageContainer>
    );
    expect(screen.getByTestId('page-container-content')).toBeInTheDocument();
  });
});
