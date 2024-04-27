import React from "react";
import { Child, LevelObject } from "./types";
import { css } from "@emotion/css";

function HiererchyChart({
  items,
  modify,
}: {
  items: Child;
  modify?: LevelObject;
}) {
  const renderChild = ({
    child,
    index,
    length = 0,
    level = 2,
  }: {
    child: Child;
    index: number;
    length: number | undefined;
    level: number;
  }) => {
    return (
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
              {modify?.[`level${level}`] ? (
                modify?.[`level${level}`]({ item: items.content, index: index })
              ) : (
                <div>{child.content}</div>
              )}
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
                  level++ &&
                  child.childs.map((items, index) =>
                    renderChild({
                      child: items,
                      index,
                      length: child?.childs?.length,
                      level: level,
                    })
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={style}>
      <div className="flex items-center">
        {modify?.level1 ? (
          modify.level1({ item: items.content, index: 0 })
        ) : (
          <div>{items.content}</div>
        )}
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
            renderChild({
              child: child,
              index,
              length: items?.childs?.length,
              level: 2,
            })
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
