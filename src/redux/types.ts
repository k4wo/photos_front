export default [
  "FETCH_PHOTOS",
  "FETCH_PHOTOS_SUCCESS",
  "FETCH_PHOTOS_ERROR",

  "SET_FILES_STATE",
  "CLEAR_UPLOAD_FILES",

  "SET_VIEWER",
  "SET_PENDING"
].reduce(
  (types: Record<string, string>, type: string): Record<string, string> => ({
    ...types,
    [type]: type
  }),
  {}
);
