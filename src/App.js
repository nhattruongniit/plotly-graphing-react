import React from "react";
import createPlotlyComponent from "react-plotlyjs";

// import createPlotlyComponent from "react-plotly.js/factory";
// import Plotly from "./custom-plotly";
import Plotly from "plotly.js/dist/plotly-cartesian";

const Plot = createPlotlyComponent(Plotly);

function App() {
  var trace1 = {
    x: ["giraffes", "orangutans", "monkeys"],
    y: [20, 14, 23],
    name: "SF Zoo",
    type: "bar",
  };

  var trace2 = {
    x: ["giraffes", "orangutans", "monkeys"],
    y: [12, 18, 29],
    name: "LA Zoo",
    type: "bar",
  };
  const data = [trace1, trace2];

  return (
    <div className="App">
      <h2>Plotly Graphic React</h2>
      <Plot
        data={data}
        layout={{
          title: "A Fancy Plot",
          barmode: "group",
        }}
      />
    </div>
  );
}

export default App;
