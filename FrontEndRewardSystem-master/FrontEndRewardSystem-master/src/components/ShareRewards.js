import React from "react";
import { Button, Modal, message } from "antd";
const confirm = Modal.confirm;

function shareRewards() {
  confirm({
    title: "Are you sure you want to share your rewards on Twitter?",
    content:
      "confirming this message is enough to share your new reward on Twitter",
    onOk() {
      message.success("Your reward has been successful shared!");
      message.success("You've just gained 5 points!");
    },
    onCancel() {
      message.warning("share your reward now and get poits!");
    }
  });
}

const ShareRewards = props => (
  <div className="container">
    <h1 id="sharerewards">Share Rewards & get points!</h1>
    <form>
      <h4>Share your Rewards on facebook and get more points! </h4>
      <Button style={{ marginTop: "6px" }} type="dashed" onClick={shareRewards}>
        Share Rewards
      </Button>
    </form>
  </div>
);

export default ShareRewards;
