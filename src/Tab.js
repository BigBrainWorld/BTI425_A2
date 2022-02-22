import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PrevView from './PrevView';
import {Link} from "react-router-dom";

export default function LabTabs(props) {
    const [value, setValue] = React.useState('1');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Link to="/">
                <Tab label="Home" value="1" />
              </Link>
              <PrevView recentlyViewed={props.recentlyViewed}></PrevView>
            </TabList>
          </Box>
          <TabPanel value="1"></TabPanel>
        </TabContext>
      </Box>
    );
  }

