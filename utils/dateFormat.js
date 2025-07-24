// export const formatDate = (date, format = "DD MMM, YYYY", locale = "en") => {
//   try {
//     const formattedDate = moment(date).locale(locale).format(format);
//     return formattedDate;
//   } catch (error) {
//     console.error(`Error formatting date: ${error.message}`);
//     return "";
//   }
// };


export function formatDate(dateInput) {
  const date = new Date(dateInput);

  if (isNaN(date)) return ""; // Invalid date fallback

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" }); // Full month name
  const year = date.getFullYear();

  // Add proper suffix (st, nd, rd, th)
  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";

  return `${day}${suffix} ${month} ${year}`;
}
