/* eslint-disable no-unused-vars */
declare global {
  interface QueryResult<TError extends Partial<Error> = Partial<Error>, TData = unknown> {
    isLoading?: boolean;
    error?: TError;
    data?: TData;
  }

  interface PageContainerProps<TError = unknown> extends React.PropsWithChildren {
    isLoading?: boolean;
    error?: TError;
    refetch?: () => void;
  }
}

export {};
