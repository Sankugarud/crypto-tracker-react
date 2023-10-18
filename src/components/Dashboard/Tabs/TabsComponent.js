import React, {useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tabs from '../tabsComponent/Tabs';
import './tabs.css'
import {motion} from 'framer-motion'
import Listcomponent from '../listcomponent/Listcomponent';

 const  TabsComponent = ({data,changeTheme}) => {
  const [value, setValue] = useState('1');
 
  const backgroundColor = changeTheme ? 'white' : 'black';
  const textColor = changeTheme ? 'black' : 'white';
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: textColor,
    fontFamily: 'Inter',
    textTransform: 'capitalize'
  };
  
    
  return (
    <Box style={{backgroundColor}}>
      <TabContext value={value} sx={{ color:'#3a80e9' }}>
        <Box>
          <TabList onChange={handleChange} variant="fullWidth"  >
            <Tab label="Grid" value="1" sx={style}/>
            <Tab label="List" value="2" sx={style}/>
          </TabList>
        </Box>
      <TabPanel   value="1">
        <motion.div initial={{ y: 100 }}
            animate={{ y: -10 }}
            transition={{
              type: 'smooth',
              duration: 2}} className='grid_items'>
        {
          data.map((item,index)=> (
            <Tabs changeTheme={changeTheme} key={index} item={item}/>
          ))
        }
        </motion.div>
       
      </TabPanel>
        <TabPanel value="2">
          <motion.div
            initial={{ x: -100 }} // Start from a negative y position
            animate={{ x: 10 }} // Move to the original position (0)
            transition={{
              type: 'smooth',
              duration: 2}}
          className="list_items">
              {
              data.map((item,index)=> (
                <Listcomponent changeTheme={changeTheme} key={index} item={item}/>
              ))
            }
          </motion.div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
export default TabsComponent