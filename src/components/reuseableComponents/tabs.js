import React, { useState } from 'react';
import { Button, Stack } from '@mui/material';

const Tabs = ({ tabs, defaultTab, onSelect }) => {
  const [selectedTab, setSelectedTab] = useState(defaultTab || tabs[0]);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    onSelect(tab);
  };

  return (
    <Stack direction="row" justifyContent="center" alignItems="center" spacing={0.5} padding="15px">
      {tabs.map((tab) => (
        <Button
          key={tab}
          size="medium"
          onClick={() => handleTabClick(tab)}
          color={selectedTab === tab ? 'primary' : 'secondary'}
          variant={selectedTab === tab ? 'contained' : 'text'}
        >
          {tab}
        </Button>
      ))}
    </Stack>
  );
};

export default Tabs;
