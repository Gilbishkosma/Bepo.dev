'use client';
import React, { useEffect, useState } from 'react';
import { Configuration } from '../components/Dashboard';
import Tab from '../components/Tab';

const Dashboard: React.FC = () => {
  useEffect(() => {
    // to make tab ui work, it was rendering incorrectly before being clicked
    const inputElement: HTMLInputElement = document.getElementsByClassName(
      'tab'
    )[0] as HTMLInputElement;

    inputElement.click();
  }, []);
  return (
    <>
      <div className='mt-5 bg-base-100 p-5 shadow-xl'>
        <p>Dashboard</p>
        <div className='tabs tabs-lifted mt-5'>
          <Tab name='dashboard_tabs' ariaLabel='Configuration' isChecked={true}>
            <Configuration />
          </Tab>
          <Tab name='dashboard_tabs' ariaLabel='Subscription'>
            {' '}
            Tab content 2
          </Tab>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
