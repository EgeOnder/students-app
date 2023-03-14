import { InfiniteQueryObserverResult } from '@tanstack/react-query';

import { useApiContext } from '../core/contexts/ApiContext';

/**
 * Add student username as key prefix to allow identity switch while keeping cache
 *
 * @param queryKey
 */
export const prefixKey = (queryKey: (string | number)[]) => {
  const { username } = useApiContext();
  return [username, ...queryKey];
};

/**
 * Add student username as key prefix to all passed keys to allow identity switch while keeping cache
 *
 * @param queryKeys
 */
export const prefixKeys = (queryKeys: (string | number)[][]) => {
  const { username } = useApiContext();
  return queryKeys.map(q => [username, ...q]);
};

/**
 * Pluck data from API response
 *
 * @param response
 *
 * TODO define API generics to use everywhere
 */
export const pluckData = (response: { data: unknown[] }) => {
  return response.data;
};

/**
 * Take the last page of data currently persisted in store by the infinite query
 */
export const popPage: {
  <T>(infiniteQuery: InfiniteQueryObserverResult<T>): T;
} = infiniteQuery => {
  return [...infiniteQuery.data.pages].pop();
};

/**
 * Take the first page of data currently persisted in store by the infinite query
 */
export const shiftPage: {
  <T>(infiniteQuery: InfiniteQueryObserverResult<T>): T;
} = infiniteQuery => {
  return [...infiniteQuery.data.pages].shift();
};