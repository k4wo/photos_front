export default [
  "FETCH_PHOTOS",
  "FETCH_PHOTOS_SUCCESS",
  "FETCH_PHOTOS_ERROR"
].reduce(
  (types: Record<string, string>, type: string): Record<string, string> => ({
    ...types,
    [type]: type
  }),
  {}
);
