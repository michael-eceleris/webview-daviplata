export const CurrencyValue = (value = "") => {
  return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
};
