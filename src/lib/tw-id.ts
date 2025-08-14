const LETTER_MAP: Record<string, number> = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
  G: 16,
  H: 17,
  I: 34,
  J: 18,
  K: 19,
  L: 20,
  M: 21,
  N: 22,
  O: 35,
  P: 23,
  Q: 24,
  R: 25,
  S: 26,
  T: 27,
  U: 28,
  V: 29,
  W: 32,
  X: 30,
  Y: 31,
  Z: 33,
};
export function isValidTwId(id: string) {
  id = id.toUpperCase();
  if (!/^[A-Z][12][0-9]{8}$/.test(id)) return false;
  const n = LETTER_MAP[id[0]];
  const digits = [Math.floor(n / 10), n % 10].concat(
    id
      .slice(1)
      .split("")
      .map((d) => parseInt(d, 10))
  );
  const weights = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1];
  const sum = digits.reduce((acc, d, i) => acc + d * weights[i], 0);
  return sum % 10 === 0;
}
