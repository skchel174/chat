export default function requireImage(src) {
  try {
    return require("assets/img/" + src);
  } catch (error) {
    return null;
  }
}
