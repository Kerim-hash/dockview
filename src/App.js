import { Layout, Model } from "flexlayout-react";
import "./index.css";
import "flexlayout-react/style/light.css";
import Box from "./components/Box";
import Dockable from "./components/dockable";
import React from "react";

var json = {
  global: {
    tabEnableClose: true,
    tabEnableDrag: true,
    tabSetTabStripHeight: 30,
    tabSetHeaderHeight: 20,
    tabSetEnableDeleteWhenEmpty: true,
  },
  borders: [],
  layout: {
    type: "row",
    weight: 100,
    children: [
      {
        type: "tabset",
        weight: 50,
        children: [
          {
            type: "tab",
            name: "button",
            component: Box,
          },
          {
            type: "tab",
            name: "One",
            component: Dockable,
          },
        ],
      },
    ],
  },
};

const model = Model.fromJson(json);


  
function App() {
  const factory = (node) => {
    console.log(node._attributes.component());
    return <div> {Box()}</div>;
  };

  return <Layout model={model} factory={factory} />;
}

export default App;
