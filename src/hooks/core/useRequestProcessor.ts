/* eslint-disable @typescript-eslint/no-explicit-any */
import { InfiniteData, useInfiniteQuery, UseInfiniteQueryOptions } from '@tanstack/react-query';
import { get } from 'lodash';
import { useMemo } from 'react';

export interface BaseResponse<T> {
  message: string | null;
  statusCode: number | null;
  data: T;
}

export function useInfiniteEnhancer<TData = unknown>(
  options: Omit<UseInfiniteQueryOptions, 'queryKey' | 'queryFn'> & {
    queryKey: string[];
    uniqueBy?: string;
    queryFn: () => Promise<BaseResponse<TData>>;
  }
) {
  const { queryKey, queryFn, getNextPageParam, uniqueBy, ...rest } = options;

  const { data, ...resp } = useInfiniteQuery<any, any, any>({
    queryKey,
    queryFn,
    getNextPageParam,
    ...rest,
  });

  // flatten all pages and deduplicate by `uniqueBy` if provided
  const items = useMemo(() => {
    let flattened = data?.pages.flatMap((page: BaseResponse<TData>) => page.data) ?? [];
    if (uniqueBy) {
      const seen = new Set();
      flattened = flattened.filter((item: TData) => {
        const key = get(item, uniqueBy);
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    }
    return flattened as TData[];
  }, [data, uniqueBy]);

  return {
    items,
    data: data as InfiniteData<BaseResponse<TData>>,
    ...resp,
  };
}
