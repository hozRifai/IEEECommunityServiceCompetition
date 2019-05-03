import React from "react";
import { Table, Divider, Tag } from 'antd';
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Points',
  dataIndex: 'Points',
  key: 'Points',
}, {
  title: 'Charities',
  key: 'Charities',
  dataIndex: 'Charities',
  render: tags => (
    <span>
      {tags.map(tag => {
        let color = tag.length > 5 ? 'geekblue' : 'green';
        if (tag === 'loser') {
          color = 'volcano';
        }
        return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
      })}
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'Houzayfa Rifai',
  Points: 240,
  Charities: ['Charity D', 'Charity c'],
}, {
  key: '2',
  name: 'Ahmad  Ezzat',
  Points: 230,
  Charities: ['Charity A'],
}, {
  key: '3',
  name: 'John Brown',
  Points: 220,
  Charities: ['Charity B', 'Charity c'],
}, {
  key: '4',
  name: 'Jim Green',
  Points: 210,
  Charities: ['Charity A'],
}, {
  key: '5',
  name: 'Joe Black',
  Points: 209,
  Charities: ['Charity A', 'Charity B'],
}, {
  key: '6',
  name: 'Mohamad Saeed',
  Points: 205,
  Charities: ['Charity A', 'Charity B'],
}, {
  key: '7',
  name: 'Mohamad Ahmad',
  Points: 200,
  Charities: ['Charity B'],
}];

const RewardsHistory = props => (
  <Table columns={columns} dataSource={data} />
);
export default RewardsHistory;
