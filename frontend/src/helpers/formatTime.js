import moment from "moment";

export function formatVisitTime(value) {
  const timestamp = moment(value);
  const today = isToday(timestamp);

  return today
    ? timestamp.fromNow()
    : timestamp.calendar();
}

export function formatDateTime(value, format = "24") {
  const timestamp = moment(value);
  const today = isToday(timestamp);
  const pattern = resolvePattern(format);

  return today
    ? timestamp.format(pattern)
    : showDate(timestamp);
}

export function formatDate(value) {
  const timestamp = moment(value);
  const today = isToday(timestamp);

  return today ? "Today" : showDate(timestamp);
}

export function formatTime(value, format = "24") {
  const timestamp = moment(value);
  const pattern = resolvePattern(format);

  return timestamp.format(pattern);
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

function resolvePattern(format) {
  return format === "24" ? "HH:mm" : "hh:mm a";
}
