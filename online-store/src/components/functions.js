import { parse, format } from "date-fns";
import { ru } from "date-fns/locale";

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatDate(setFunc, source) {
  let dateFormatted = source.split("T").slice(0, 1).join("");
  let createDate = parse(dateFormatted, "yyyy-MM-dd", new Date());
  setFunc(format(createDate, "MMMM do, yyyy", { locale: ru }));
}
