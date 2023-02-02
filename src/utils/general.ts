export type PickByValue<T extends object, K extends keyof T> = Pick<
  T,
  K
>[keyof Pick<T, K>]
