import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["vi", "en", "id"],
  localePrefix: "as-needed",
  localeCookie: false,

  // Used when no locale matches
  defaultLocale: "vi",
});
