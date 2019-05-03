import React from "react";
import { Form, Icon, Input, Button, Spin } from "antd";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
const FormItem = Form.Item;

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onAuth(values.userName, values.password);
      }
    });
    this.props.history.push("/dashboard/");
  };

  render() {

    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p>The username or password you entered is incorrect.</p>;
    }
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="container" id="login_page">
        {errorMessage}
        <h2 id="login_title">Login & enjoy our reward system.</h2>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator("userName", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                className="control_field_width"
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                className="control_field_width"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: "10px" }}
            >
              login
            </Button>
            <a href="#">Reset Passowrd </a>
          </FormItem>
        </Form>
        {this.props.loading ? <Spin indicator={antIcon} /> : null}
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(Login);
const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (userName, password) =>
      dispatch(actions.authLogin(userName, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedNormalLoginForm);
