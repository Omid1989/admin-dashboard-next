export const convertToPersianNumber = (number) => {
  if (typeof number !== "number" && typeof number !== "string") {
    return "";
  }

  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  // 1. Format with commas (Western style)
  const formattedNumber = number.toLocaleString("en-US"); // Use English locale for commas

  // 2. Replace digits with Persian equivalents
  const persianFormatted = formattedNumber.replace(/\d/g, (digit) => {
    return persianDigits[parseInt(digit, 10)];
  });

  return persianFormatted;
};
