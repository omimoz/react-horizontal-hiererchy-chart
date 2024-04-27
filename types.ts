export type Node = React.ReactElement | JSX.Element;
export type Child<T = unknown> = {
  content: Node | string;
  cssClass?: string;
  childs?: Child<T>[];
  data?: T[];
  border?: string;
};
export type LevelObject = {
  [key: string]: ({
    item,
  }: {
    item: string | Node;
    index: number;
  }) => JSX.Element;
};
