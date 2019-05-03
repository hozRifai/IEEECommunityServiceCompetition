import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Steps, message, Input } from 'antd';
import {
    Form, Select, InputNumber, Switch, Radio,
    Slider, Button, Upload, Icon, Rate, Checkbox,
    Row, Col,
} from 'antd';

const success = () => {
    message.success("Thanks for the donation!");
};

const Step = Steps.Step;
const { Option } = Select;
const steps = [{
    title: '1st Step',
    content: 'Kindly choose the charity',
}, {
    title: '2nd Step',
    content: 'How many points do you want to send?',
}, {
    title: '3rd Step',
    content: 'We are almost there, are you sure you want to donate now?',
}];


class Donate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        const { current } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            <div class="container">

                <h1 id="make_transaction_history">Let's save a life!</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item
                        label="Select the charity"
                        hasFeedback
                    >
                        {getFieldDecorator('select', {
                            rules: [
                                { required: true, message: 'Please select the charity!' },
                            ],
                        })(
                            <Select placeholder="Please select the charity" style={{ width: "25%" }} >
                                <Option value="Charity A">Charity A</Option>
                                <Option value="Charity B">Charity B</Option>
                                <Option value="Charity C">Charity C</Option>
                                <Option value="Charity D">Charity D</Option>
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item>
                        <p>Enter the amount of points you want to donate:</p>
                        <InputNumber min={1} max={10} defaultValue={10} style={{ width: "25%" }} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={success}>
                            Donate
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const WrappedApp = Form.create({ name: 'coordinated' })(Donate);

export default WrappedApp;