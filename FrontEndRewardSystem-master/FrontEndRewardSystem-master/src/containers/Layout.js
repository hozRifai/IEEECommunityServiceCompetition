import React, { Component } from "react";
import ReactDOM from "react-dom";
import YoutubeBackground from 'react-youtube-background'
import { Link, withRouter } from "react-router-dom";
import "./../App.css";
import { connect } from "react-redux";
import { Layout, Menu, Icon, Avatar, Badge, Steps, Dropdown } from "antd";
import * as actions from "../store/actions/auth";
import Form from "../components/Login";
const SubMenu = Menu.SubMenu;
const { Header, Content, Footer, Sider } = Layout;
const Step = Steps.Step;

const menu = (
  <Menu>
    <Menu.Item>
      <a href="/">Logout</a>
    </Menu.Item>
  </Menu>
);

class CustomLayout extends Component {
  state = {
    collapsed: false,
    videoURL: "https://www.youtube.com/watch?v=cRTk7aSbyd0&pbjreload=10",
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };



  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <Layout style={{ minHeight: "100vh" }}>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                <Menu.Item key="1">
                  <Link to="/dashboard/">
                    <Icon type="bar-chart" />
                    <span>Dashboard</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/addGoal/">
                    <Icon type="pie-chart" />
                    <span>Add Goal</span>
                  </Link>
                </Menu.Item>
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      <span>User</span>
                    </span>
                  }
                >
                  <Menu.Item key="3">
                    <Link to="/adverts">
                      <Icon type="eye" theme="filled" />
                      <span>Our Adverts</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/donate/">
                      <Icon type="heart" theme="filled" />
                      <span>donate</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="5">
                    <Link to="/dailyLogin">
                      <Icon type="login" theme="outlined" />
                      <span>Daily Login</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <Link to="/fillasurvey">
                      <Icon type="file-done" theme="outlined" />
                      <span>Fill A Survey</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="7">
                    <Link to="/shareRewards">
                      <Icon type="twitter" theme="outlined" />
                      <span>Share Rewards</span>
                    </Link>
                  </Menu.Item>

                </SubMenu>
                <Menu.Item key="8">
                  <Link to="/rewardshistory">
                    <Icon type="trophy" theme="outlined" />
                    <span>Top Donators</span>
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: "#fff", padding: 0 }}>
                <Icon
                  className="trigger"
                  style={{ paddingLeft: "2em" }}
                  type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                  onClick={this.toggle}
                />
                <div style={{ float: "right", paddingRight: "3em" }}>
                  <Badge count={2}>
                    <Icon
                      type="bell"
                      theme="outlined"
                      style={{ marginTop: "7px" }}
                    />
                  </Badge>
                  <Badge count={9} style={{ backgroundColor: "#52c41a" }}>
                    <Avatar
                      style={{ marginBottom: "7px", marginLeft: "10px" }}
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    >
                      {" "}
                    </Avatar>
                  </Badge>
                  {/* <span size="small">HozRifai</span> */}
                  <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                      HozRifai <Icon type="down" />
                    </a>
                  </Dropdown>
                </div>
              </Header>

              <Content
                style={{
                  margin: "24px 16px 0px",
                  padding: 24,
                  background: "#fff",
                  minHeight: 280
                }}
              >
                {this.props.children}
              </Content>

              <Footer style={{ textAlign: "center" }}>
                Made with{" "}
                <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /> by
                DFL
              </Footer>
            </Layout>
          </Layout>
        ) : (

            <Layout className="layout">
              <Header>
                <div className="logo" />
                <Menu
                  theme="dark"
                  mode="horizontal"
                  style={{ lineHeight: "64px" }}
                >
                  <Menu.Item key="11">
                    <Link to="/home/">
                      <span>Home</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="12">
                    <Link to="/our-mission/">
                      <span>Our Mission</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="14">
                    <Link to="/login/">
                      <span>Login</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="15">
                    <Link to="/about-us/">
                      <span>About Us</span>
                    </Link>
                  </Menu.Item>
                </Menu>
              </Header>
              {window.location.href.includes("home") ?
                <Content>
                  <div class="video-background">
                    <div class="video-foreground">
                      <iframe src="https://www.youtube.com/embed/cRTk7aSbyd0?autoplay=1&loop=1" frameborder="0" allowfullscreen></iframe>
                    </div>
                  </div>
                </Content> : null
              }
              {window.location.href.includes("mission") ?
                <Content style={{ padding: "0 50px", marginTop: 100 }}>
                  <div>
                    <h1>Our Mission:</h1>
                    <p>We are aiming to provide the support to the people in Africe who need pure water with the help of<br></br> the companies, charities and the donars. </p>
                    <p>We have already contacted Masafi and they were amazed by the idea itself and they have shown the <br></br>needed interest and we have the hope to take this idea to the next level where we can convert our vision <br></br>to a real product that can be used by everyone to help these poor people who can not afford a pure water<br></br> in their daily life.</p>
                    <h1>Charities:</h1>
                    <p>we are looking forward to contact the following charities:</p>
                    <p>- The Red Crisent</p>
                    <p>- Beit Al kheir</p>
                    <p>- Dar Al Ber</p>
                    <p>- Sharjah Charity</p>
                  </div>
                </Content>
                : null
              }
              {window.location.href.includes("about") ?
                <Content style={{ padding: "0 50px", marginTop: 100 }}>
                  <div>
                    <h1>About Us:</h1>
                    <p>We are a non-profit organization who is hoping to have a platform in which we can urge people <br></br> to help those who can not afford a pure water in Africa. </p>
                    <p>The platform have been found to connect people with charities by changing the concept of donation<br></br> from a real money to points. That will make it easy for peopele to donate. </p>
                    <br></br>
                    <h1>Founders:</h1>
                    <p>Hozayfa Rifai: A computer science student in his 3rd year.</p>
                    <p id="founders"> Ahmed Ezzat: An Electrical Engineer student in his 4th year. </p>
                  </div>
                </Content> : null
              }
              {window.location.href.includes("login") ?
                <Content style={{ padding: "0 50px", marginTop: 100 }}>
                  <Form
                    {...this.props}
                  />
                </Content>
                : null
              }

            </Layout>
          )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(CustomLayout)
);
