export const getPageTitle = (segment) => {
  const titles = {
    home: "harbour IT",
    about: "ABOUT",
    course: "COURSES",
    contact: "CONTACT",
    career: "CAREER",
    event: "EVENT",
    login: "LOG IN",
  };

  if (segment === "home") {
    return titles[segment];
  }

  const title = titles[segment] || "website";
  return `${title} - Harbour IT`;
};
