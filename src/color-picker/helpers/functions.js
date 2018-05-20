export const validateHexString = hex => {
  return /^#[0-9a-f]{3,6}$/i.test(hex);
};
