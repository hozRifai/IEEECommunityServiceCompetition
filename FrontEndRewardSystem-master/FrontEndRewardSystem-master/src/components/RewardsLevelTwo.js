import React from "react";
import { Card, Col, Row, Badge } from "antd";

const RewardsLevelTwo = props => (
  <div>
    <h1 id="rewardslevelone"> Rewards Level Two</h1>
    <Row gutter={16}>
      <Col span={12} style={{ background: "#ECECEC", padding: "2px" }}>
        <Card title="Enter Monthly Draw">
          Enter the monthly raffle and win this month's prize of a free HP
          laptop :D
        </Card>
      </Col>
      <Col span={12} style={{ background: "#ECECEC", padding: "2px" }}>
        <Card title="Enter Annual Draw ">
          Are you ready for a sparkling new Tesla? Enter the the draw and buckle
          up!
        </Card>
      </Col>
    </Row>
  </div>
);
export default RewardsLevelTwo;
