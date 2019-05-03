import React from "react";
import {
  Button,
  InputNumber,
  DatePicker,
  notification,
  Icon,
  Input,
  Card,
  Cascader
} from "antd";


const options = [{
  value: 'Charity A',
  label: 'Charity A',
  children: [{
    value: 'UAE',
    label: 'UAE',
    children: [{
      value: 'Dubai',
      label: 'Dubai',
    }],
  }],
}, {
  value: 'Charity B',
  label: 'Charity B',
  children: [{
    value: 'UAE',
    label: 'UAE',
    children: [{
      value: 'Abu Dhabi',
      label: 'Abu Dhabi',
    }],
  }],
},
{
  value: 'Charity C',
  label: 'Charity C',
  children: [{
    value: 'UAE',
    label: 'UAE',
    children: [{
      value: 'Sharjah',
      label: 'Sharjah',
    }],
  }],
}];


const openNotification = () => {
  notification.open({
    message: "Adding A New Goal!",
    description: "You can save enought points for donation",
    icon: <Icon type="smile" style={{ color: "#108ee9" }} />
  });
};

const SetGoal = props => (
  <div className="container">
    <div style={{ float: "left" }}>
      <h1 id="addgoalstitle"> Add Goals </h1>
      <h4>Add the amount of points you want to collect:</h4>
      <InputNumber
        defaultValue={100}
        formatter={value => `${value} PTS`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        parser={value => value.replace(/\$\s?|(,*)/g, "")}
      /><br /><br />
      <h4>Describe Your Goal:</h4>
      <Input placeholder="I am saving that money for the future" />
      <br /><br />
      <h4>Select your favorite charity</h4>
      <Cascader options={options} changeOnSelect />
      <br />
      <br />
      <Button
        style={{ marginTop: "6px" }}
        type="primary"
        onClick={openNotification}
      >
        Add My Goal!
      </Button>
    </div>

    <div style={{ float: "right", marginRight: "30%" }}>
      <h1 id="goalshistory"> Goals History </h1>


      <Card
        title="Charity A"
        extra={<p>onGoing</p>}
        style={{ width: 300 }}
      >
        <p>I will collect 400 points to give them to charity A </p>
      </Card>

      <br />

      <Card title="Charity B" extra={<p>Done</p>} style={{ width: 300 }}>
        <p>Saving 200 points to Charity B</p>
      </Card>

    </div>
  </div> /* end of life!*/
);

export default SetGoal;
