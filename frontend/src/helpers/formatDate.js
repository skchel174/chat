import moment from "moment";

export default function formatDate(value, format = null) {
  const timestamp = moment(value);

  const today = isToday(timestamp);

  if (format === "datetime") {
    if (today) {
      return showTime(timestamp);
    }

    return showDate(timestamp);
  }

  if (format === "date") {
    if (today) {
      return "Today";
    }

    return showDate(timestamp);
  }

  if (format === "visit") {
    if (today) {
      return timestamp.fromNow();
    }

    return timestamp.calendar();
  }

  return timestamp.toString();
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
