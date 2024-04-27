# React Hierarchy Chart Module 📈🗺️

This is a React module that creates a hierarchical chart using CSS styling. It is written in TypeScript and uses Emotion for styling. 💅

## Installation 🚀
You can install this module using npm or yarn:

```
npm install react-horizontal-hierarchy-chart
```
or

```
yarn add react-horizontal-hierarchy-chart
```
## Usage 🔧
To use this module, import it into your React component:

```
import HiererchyChart from "./react-horizontal-hiererchy-chart";
```
Then, create an object that represents the hierarchy of your chart. Each child object should have a content property which is the text to be displayed, a level property which represents the depth of the chart, and a border property which is the color of the lines that connect the nodes. Here's an example:
```
const items = {
  content: "Or",
  level: 1,
  childs: [
    {
      content: "And",
      level: 2,
      border: "red",
      childs: [
        {
          level: 3,
          content: "child",
          border: "red",
        },
        // ... more child items
      ],
    },
  ],
};
```
Finally, render the HierarchyChart component and pass in the items object:
```
Copy
Insert
<HiererchyChart
  items={items}
  modify={{
    level1: ({ item }) => (
      <div style={{ background: "blue" }}>{item}</div>
    ),
    level3: ({ item }) => {
      return <div style={{ background: "red" }}>{item}</div>;
    },
  }}
/>
```
The modify prop allows you to customize the appearance of different levels of the chart. In this example, we're using it to change the background color of the first and third levels.

## Styling 🎨
The module uses Emotion for styling. You can customize the appearance of the chart by modifying the CSS classes defined in the style variable at the bottom of the module.

## License 📃
This module is licensed under the MIT license. See the LICENSE file for more information.
