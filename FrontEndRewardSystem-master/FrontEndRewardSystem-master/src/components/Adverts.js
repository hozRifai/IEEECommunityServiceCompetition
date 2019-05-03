import React, { Component } from "react";
import ReactDOM from "react-dom";
import YouTube from 'react-youtube';

import { Card, Icon, Avatar, Button, Modal, message } from 'antd';
const { Meta } = Card;

class Adverts extends Component {
    state = { visible: false, videoURL1: "https://www.youtube.com/watch?v=PTY7dAfBLUQ", }

    showModal = () => {
        this.setState({
            visible: true,
            videoURL1: "https://www.youtube.com/watch?v=PTY7dAfBLUQ",
        });
    }



    hideModal = () => {
        this.setState({
            visible: false,
        });
        message.success("You have just gained 5 points");
    }

    render() {
        const opts = {
            height: '250',
            width: '460',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        return (
            <div className="container">
                <div style={{ display: "inline-block" }}>
                    <Card
                        style={{ width: "300px", float: "left" }}
                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        actions={[<Button onClick={this.showModal} type="primary" htmlType="submit">
                            <Icon type="eye" theme="filled" />Watch it now
          </Button>, <Modal
                            title="Masafi"
                            visible={this.state.visible}
                            onOk={this.hideModal}
                            onCancel={this.hideModal}
                            okText="Ok"
                            cancelText="Exit"
                        >
                            <YouTube
                                videoId="PTY7dAfBLUQ"
                                opts={opts}
                                onReady={this._onReady}
                            />
                        </Modal>]}
                    >
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="Masafi"
                            description="Masafi 300m Deep Earth Water"
                        />
                    </Card>
                </div>
                <div style={{ float: "right" }}>
                    <Card
                        style={{ width: "300px", float: "left", marginRight: "90px" }}
                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        actions={[<Button type="primary" htmlType="submit" className="login-form-button">
                            <Icon type="eye" theme="filled" />Watch it now
          </Button>, <Modal
                            title="Masafi"
                            visible={this.state.visible}
                            onOk={this.hideModal}
                            onCancel={this.hideModal}
                            okText="Ok"
                            cancelText="Exit"
                        >
                            <YouTube
                                videoId="PTY7dAfBLUQ"
                                opts={opts}
                                onReady={this._onReady}
                            />
                        </Modal>]}
                    >
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="Masafi"
                            description="Masafi Alkalife's ph9"
                        />
                    </Card>
                    <Card
                        style={{ width: "300px", float: "right" }}
                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        actions={[<Button type="primary" htmlType="submit" className="login-form-button">
                            <Icon type="eye" theme="filled" />Watch it now
          </Button>, <Modal
                            title="Masafi"
                            visible={this.state.visible}
                            onOk={this.hideModal}
                            onCancel={this.hideModal}
                            okText="Ok"
                            cancelText="Exit"
                        >
                            <YouTube
                                videoId="PTY7dAfBLUQ"
                                opts={opts}
                                onReady={this._onReady}
                            />
                        </Modal>]}
                    >
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="Masafi"
                            description="Masafi Water ZERO"
                        />
                    </Card>
                </div>
            </div >
        )
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
};

export default Adverts;