import React from "react";
import { Button, Checkbox, Input, message } from "antd";
import IconSlider from "../containers/IconSlider";

const CheckboxGroup = Checkbox.Group;

function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}

const success = () => {
  message
    .loading("Checking...", 2.5)
    .then(() =>
      message.success("Thanks for helping us widen our horizons", 2.5)
    );
};

const plainOptions = [
  { label: "Strongly Agree", value: "Strongly Agree" },
  { label: "Agree", value: "Agree" },
  { label: "Neutral", value: "Neither Agree Nor Disagree" },
  { label: "Strongly Disagree", value: "Strongly Disagree" },
  { label: "Disagree", value: "Disagree" }
];

const FillSurvey = props => (
  <div className="conatiner">
    <h2 id="fillasurvey">Fill This Survey & get points</h2>
    <div>
      <p>You are open to our idea (Katra) and you are ready to watch ads to help the people in Africa: </p>
      <CheckboxGroup
        options={plainOptions}
        defaultValue={["Apple"]}
        onChange={onChange}
      />
      <br /> <br />
      <p>you are ready to spend hours per month to watch ads</p>
      <CheckboxGroup
        options={plainOptions}
        defaultValue={["Apple"]}
        onChange={onChange}
      />
      <br /> <br />
      <p>You believe that Katra can achieve their goals with the help of people:</p>
      <CheckboxGroup
        options={plainOptions}
        defaultValue={["Apple"]}
        onChange={onChange}
      />
      <br />
      <br />
      <p>how satisfied are you with our services:</p>
      <IconSlider min={0} max={10} style={{ maxWidth: "70%" }} />
    </div>

    <h4>Have you got any idea to improve our services, kindly share them with us: </h4>
    <Input style={{ width: "35%" }} placeholder="i think if you could ..." />
    <br />
    <Button style={{ marginTop: "6px" }} type="primary" onClick={success}>
      Submit & get points
    </Button>
  </div>
);

export default FillSurvey;
