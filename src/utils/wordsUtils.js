export const LowerCase = (value = "") => {
  return value.toString().toLowerCase();
};

export const FirstLetterCapitalize = (value = "") => {
  const firstLetter =
    value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  return firstLetter;
};
