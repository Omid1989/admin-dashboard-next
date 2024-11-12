import moment from "moment-jalaali";
import { momentLocalizer } from "react-big-calendar";

moment.loadPersian({ dialect: "persian-modern" });

const localizer = momentLocalizer(moment);

// تابع سفارشی برای فرمت‌بندی عنوان ماه
localizer.formats.monthHeaderFormat = (date, culture, localizer) => {
  return moment(date).format("jMMMM jYYYY");
};

// تابع سفارشی برای فرمت‌بندی عنوان هفته
localizer.formats.weekdayFormat = (date, culture, localizer) => {
  return moment(date).format("dddd");
};

// تابع سفارشی برای فرمت‌بندی تاریخ در نمای ماهانه
localizer.formats.dateFormat = (date, culture, localizer) => {
  return moment(date).format("jD");
};
export default localizer;
