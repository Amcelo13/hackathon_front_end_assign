import { Tabs,Tab } from '@mui/material'
import React from 'react'

function TabBar() {
  return (
    <>
    <Tabs
//     value={value}
// //   onChange={handleChange}
TabIndicatorProps={{
    sx: {
      bgcolor: "orange",
      height: "10px"
    }
  }}
  
  textColor="secondary"
  indicatorColor="secondary"
  aria-label="secondary tabs example">
        <Tab value="one" label="All Submissions" />
        <Tab value="two" label="Favourite Submissions" />
    </Tabs>
    </>
  )
}

export default TabBar