import React from "react";
import { Child } from "./types";
import { css } from "@emotion/css";

function HiererchyChart({ items }: { items: Child }) {
  const renderChild = ({
    child,
    index,
    length = 0,
  }: {
    child: Child;
    index: number;
    length: number | undefined;
  }) => (
    <div key={index}>
      <div key={Math.random()} className={` levels ${child.cssClass}`}>
        <div className="lines-container lines-container-horizontal">
          <div
            className={`lines ${index === 0 && "hidden"}  ${css`
              background-color: ${child.border ? child.border : "black"};
            `}`}
          ></div>
          <div
            className={`m-line ${css`
              background-color: ${child.border ? child.border : "black"};
            `}`}
          ></div>
          <div
            className={`lines ${length - 1 === index && "hidden"} ${css`
              background-color: ${child.border ? child.border : "black"};
            `}`}
          ></div>
        </div>
        <div className="flex p-vertical-2">
          <div className="flex items-center">
            <div
              className={`line-horizontal ${css`
                background: ${child.border ? child.border : "black"};
              `}`}
            ></div>
            <div className="child">{child.content}</div>
            {child?.childs && (
              <div
                className={`line-horizontal ${css`
                  background: ${child?.childs[0]?.border
                    ? child?.childs[0]?.border
                    : "black"};
                `}`}
              ></div>
            )}
            <div>
              {child.childs &&
                child.childs.map((items, index) =>
                  renderChild({
                    child: items,
                    index,
                    length: child?.childs?.length,
                  })
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={style}>
      <div className="flex items-center">
        <div>{items.content}</div>
        {items?.childs && (
          <div
            className={`line-horizontal ${css`
              background: ${items?.childs[0]?.border
                ? items?.childs[0]?.border
                : "black"};
            `}`}
          ></div>
        )}
        <div>
          {items?.childs?.map((child, index) =>
            renderChild({ child: child, index, length: items?.childs?.length })
          )}
        </div>
      </div>
    </div>
  );
}

export default HiererchyChart;
const style = css`
  .flex {
    display: flex;
    flex: 1;
  }
  .items-center {
    align-items: center;
  }
  .line-horizontal {
    width: 1em;
    height: 0.1em;
  }
  .lines {
    width: 0.1em;

    flex: 1;
  }
  .m-line {
    width: 0.1em;
    height: 0.1em;
  }
  .levels {
    display: flex;
  }
  .lines-container.lines-container-horizontal {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .child {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 100%;
  }
  .p-vertical-2 {
    padding: 1em 0;
  }
  .hidden {
    background-color: transparent;
  }
`;
