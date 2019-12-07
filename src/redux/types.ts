export default [
  "FETCH_PHOTOS",
  "FETCH_PHOTOS_SUCCESS",
  "FETCH_PHOTOS_ERROR",

  "SET_UPLOAD_FILES",
  "SET_IS_UPLOADED_FILE",
  "START_UPLOADING_FILE"
].reduce((types: Record<string, string>, type: string): Record<
  string,
  string
> => {
  console.log("object");

  return {
    ...types,
    [type]: type
  };
}, {});
