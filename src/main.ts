const STORAGE_KEY = "WOLBORG";
const LINKED_IN_LINK = "https://www.linkedin.com/in/abhishek-saini-0607/";

type Option = {
  log: Boolean;
  storage: Boolean;
};

const defaultOption: Option = {
  log: true,
  storage: true,
};

const madeByWolborg = (options: Option = defaultOption): void => {
  // If the application is running on browser
  if (typeof window === "object" && typeof process === "undefined") {
    // If the the log option is true
    if (options.log) {
      console.log("Made By Wolborg : " + LINKED_IN_LINK);
    }

    // If the the storage option is true
    if (options.storage) {
      window.localStorage.setItem(STORAGE_KEY, LINKED_IN_LINK);
    }
  }
  // If the application is running on nodejs
  else if (typeof window === "undefined" && typeof process === "object") {
    console.log("Made By Wolborg : " + LINKED_IN_LINK);
  }
};

export default madeByWolborg;
