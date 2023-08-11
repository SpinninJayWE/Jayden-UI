type Many<T> = T | ReadonlyArray<T> | undefined;
export const castArray = <T>(arr: Many<T>): T[] => {
  if (arr === undefined || arr === null) {
    return [];
  }

  return Array.isArray(arr) ? arr : [arr];
};
