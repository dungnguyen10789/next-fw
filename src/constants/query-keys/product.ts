export const QUERY_PRODUCT_KEYS = {
  all: ['product'],
  byId: (id: string) => [...QUERY_PRODUCT_KEYS.all, id],
};
