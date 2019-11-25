export const computeWidth = (
  width: number,
  height: number,
  resizeTo: number
): number => {
  if (height <= resizeTo) {
    return height;
  }

  const percent = (resizeTo * 100) / height;
  return (percent / 100) * width;
};
