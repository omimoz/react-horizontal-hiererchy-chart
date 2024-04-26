export type Child<T = unknown> = {
  name: string;
  cssClass: string;
  childs?: Child<T>[];
  data?: T[];
  border?: string;
};
