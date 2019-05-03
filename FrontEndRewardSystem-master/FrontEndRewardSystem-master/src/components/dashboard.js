import React from "react";
import ReactDOM from "react-dom";
import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts";
import { Progress, Tooltip as TOOLTIP } from "antd";
// my Data
const data = [
  { genre: "Charity A", sold: 275, income: 2300 },
  { genre: "Charity B", sold: 115, income: 667 },
  { genre: "Charity C", sold: 120, income: 982 },
  { genre: "Charity D", sold: 350, income: 5271 }
];

// cols on the grapg
const cols = {
  sold: { alias: "points" },
  genre: { alias: "methods" }
};

const Dashboard = props => (
  <div>
    <div style={{ float: "left" }}>
      <h1 id="pointsAnalysis">Points Analysis</h1>
      <Chart width={600} height={350} data={data} scale={cols}>
        <Axis name="genre" />
        <Axis name="sold" />
        <Legend position="top" dy={-10} />
        <Tooltip />
        <Geom type="interval" position="genre*sold" color="genre" />
      </Chart>
    </div>
    <div style={{ float: "right", paddingRight: "40px" }}>
      <h1 id="levelsleft">Points to reach level 10</h1>
      <div>
        <Progress type="circle" percent={60} status="active" />
      </div>
      <div id="tooltip">
        <h2 id="currentpoints">Your current points</h2>
        <TOOLTIP title="let's get more points">
          <Progress
            percent={60}
            format={percent => `${percent} Points`}
            successPercent={30}
          />
        </TOOLTIP>
      </div>
    </div>
  </div>
);
export default Dashboard;
