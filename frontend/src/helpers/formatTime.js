import moment from "moment";

export function formatVisitTime(value) {
  const timestamp = moment(value);
  const today = isToday(timestamp);

  return today
    ? timestamp.fromNow()
    : timestamp.calendar();
}

export function formatDateTime(value) {
  const timestamp = moment(value);
  const today = isToday(timestamp);

  return today
    ? timestamp.format("HH:mm")
    : showDate(timestamp);
}

export function formatDate(value) {
  const timestamp = moment(value);
  const today = isToday(timestamp);

  return today ? "Today" : showDate(timestamp);
}

export function formatTime(value) {
  const timestamp = moment(value);

  return timestamp.format("HH:mm");
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
