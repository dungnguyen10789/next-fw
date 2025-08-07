declare module '@types/uikit' {
  export interface QueryResult<TError extends Error = Error, TData = unknown> {
    isLoading?: boolean;
    error?: TError;
    data?: TData;
  }

  export interface WithPageContainerProps {
    queries: QueryResult | QueryResult[];
  }
}
