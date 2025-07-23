export const formatDate = (date, format = "DD MMM, YYYY", locale = "en") => {
  try {
    const formattedDate = moment(date).locale(locale).format(format);
    return formattedDate;
  } catch (error) {
    console.error(`Error formatting date: ${error.message}`);
    return "";
  }
};
