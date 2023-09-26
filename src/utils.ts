export const easeOutExpo = (x: number): number => {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

export const easeOutCubic = (x: number): number => {
  return 1 - Math.pow(1 - x, 3);
}

export const easeInCubic = (x: number): number => {
  return x * x * x;
}