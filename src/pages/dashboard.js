import React from 'react';
import PageHeading from '../tailwindui/base/page-heading';
import Card from '../tailwindui/base/card';
import Table from '../tailwindui/base/table';

const Dashboard = (props) => {
  const { x } = props;

  return (
    <div>
      <PageHeading title="New Page" breadCrumbs />
      <Card title="Here's some shit" description buttons>
        We got some stuff in a card
      </Card>
      <Table />
    </div>
  );
};

export default Dashboard;
