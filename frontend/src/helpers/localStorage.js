export default {
  get: (key) => {
    const data = window.localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  },

  set: (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  },

  remove: (key) => {
    window.localStorage.removeItem(key);
  },

  clear: () => {
    window.localStorage.clear();
  },
}
