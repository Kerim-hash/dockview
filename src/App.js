import {Layout, Model} from 'flexlayout-react';
import './index.css';
import 'flexlayout-react/style/light.css';
import Box from './components/Box';


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
                        name: 'button',
                        component: "default",
                    },
                    {
                        type: "tab",
                        name: "One",
                        component: Box,
                    },
                    {
                      type: "tab",
                      name: "One",
                      component: "panel",
                  }
                ]
            },
            {
                type: "tabset",
                weight: 50,
                children: [
                    {
                        type: "tab",
                        name: "Two",
                        component: "text"
                    },
                    {
						type: "tab",
						id: "#251dcd35-22d8-41b4-aac0-1bd311cf4afc",
						name: "Wikipedia",
						component: "multitype",
						config: {
							type: "url",
							data: "https://en.wikipedia.org/wiki/Main_Page"
						}
					}
                ]
            }
        ]
    }
};

const model = Model.fromJson(json);

function App() {

  const  factory = (node) => {
    console.log(node.getComponent())
    var component = node.getComponent();
        return <div>{Box()}</div>
}

  return (
    <Layout
      model={model}
      factory={factory} />
  );
}

export default App;
