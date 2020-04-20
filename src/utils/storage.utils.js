import { storage } from '../config';

function get(key, fallback = {}) {
  const stored = window.sessionStorage.getItem(key);
  return stored ? JSON.parse(stored) : fallback;
}

function rm(key) {
  return window.sessionStorage.removeItem(key);
}

function set(key, value) {
  const prev = get(key);
  const payload = JSON.stringify({ ...prev, ...value });
  return window.sessionStorage.setItem(key, payload);
}

export const cart = {
  get: () => get(storage.keys.cart),
  rm: () => rm(storage.keys.cart),
  set: (payload) => set(storage.keys.cart, payload),
};
