export const isEmpty = <T>(value: T) => {
  if (typeof value === 'string') {
    return value.length === 0;
  } else if (Array.isArray(value)) {
    return value.length === 0;
  } else {
    throw new Error('🧨: Value is not string or array');
  }
};
