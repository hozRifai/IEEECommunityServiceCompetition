import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
    HashRouter as Router, Route, Switch, Link, withRouter,
} from 'react-router-dom';
import { Breadcrumb, Alert } from 'antd';


const Home = withRouter((props) => {
    const { location } = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>
                    {breadcrumbNameMap[url]}
                </Link>
            </Breadcrumb.Item>
        );
    });
    const breadcrumbItems = [(
        <Breadcrumb.Item key="home">
            <Link to="/">Home</Link>
        </Breadcrumb.Item>
    )].concat(extraBreadcrumbItems);
    return (
        <div className="demo">
            <div className="demo-nav">
                <Link to="/">Home</Link>
                <Link to="/apps">Application List</Link>
            </div>
            <Switch>
                <Route path="/apps" component={Apps} />
                <Route render={() => <span>Home Page</span>} />
            </Switch>
            <Alert style={{ margin: '16px 0' }} message="Click the navigation above to switch:" />
            <Breadcrumb>
                {breadcrumbItems}
            </Breadcrumb>
        </div>
    );
});



export default Home; 