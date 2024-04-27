export type Node = React.ReactElement | JSX.Element;
export type Child<T = unknown> = {
  content: Node | string;
  cssClass?: string;
  border?: string;
  childs?: Child<T>[];
};
export type LevelObject = {
  [key: string]: ({
    item,
    index,
  }: {
    item: string | Node;
    index: number;
  }) => JSX.Element;
};
