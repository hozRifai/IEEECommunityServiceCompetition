import { Card, Col, Row, Badge } from "antd";
import React from "react";

const RewardsLevelOne = props => (
  <div>
    <h1 id="rewardslevelone"> Rewards Level One</h1>
    <Row gutter={8}>
      <Col span={8} style={{ background: "#ECECEC", padding: "2px" }}>
        <Badge count={4}>
          <Card title="Transaction Free">
            Enjoy a transaction free of fees! you deserve it!
          </Card>
        </Badge>
      </Col>
      <Col span={8} style={{ background: "#ECECEC", padding: "2px" }}>
        <Badge count={2}>
          <Card title="Open Account">
            Open a free account the moment you want!
          </Card>
        </Badge>
      </Col>
      <Col span={8} style={{ background: "#ECECEC", padding: "2px" }}>
        <Badge count={3}>
          <Card title="Pay off a loan">
            We'll lend you a hand and ease any loans issues.
          </Card>
        </Badge>
      </Col>
    </Row>
  </div>
);
export default RewardsLevelOne;
