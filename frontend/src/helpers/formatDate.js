import moment from "moment";

export default function formatDate(value, format = null) {
  const timestamp = moment(value);
  const today = isToday(timestamp);

  switch (format) {
    case "datetime":
      return today ? showTime(timestamp) : showDate(timestamp);
    case "date":
      return today ? "Today" : showDate(timestamp);
    case "time":
      return showTime(timestamp);
    case "visit":
      return today ? timestamp.fromNow() : timestamp.calendar();
    default:
      return timestamp.toString();
  }
}

function isToday(timestamp) {
  return timestamp >= moment({hour: 0, minute: 0, seconds: 0, milliseconds: 0})
}

function showDate(timestamp) {
  let pattern = "MMMM Do"

  if (timestamp.year() !== moment().year()) {
    pattern = pattern + ", YYYY";
  }

  return timestamp.format(pattern);
}

function showTime(timestamp) {
  return  timestamp.format("HH:mm");
}
