export const CurrencyValue = (value = "") => {
  const length = value.toString().length;
  if (length > 6 && length < 10) {
    return (
      value.toString().charAt(0) +
      "'" +
      value
        .toString()
        .slice(1)
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
    );
  }
  return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
};
