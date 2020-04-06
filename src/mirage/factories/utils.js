export function randomNumber({ min, max } = { min: 1, max: 5 }) {
  return Math.round(Math.random() * (max - min) + min);
}
