import { Box, Stack, Tab, Tabs } from '@mui/material'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ContentGrid from './ContentGrid';

const data = [
  {
    Id: "Dsc",
    Ad: "Newest First"
  },
  {
    Id: "Asc",
    Ad: "Oldest First"
  }
];
function TabBar() {
  const [tab, setTab] = useState(0);
  const [rankType, setRankType] = useState(data[0].Id);  //SETTING DEFAULT rank/sort as dsc/newest first
  const [search, setSearch] = useState("")
  const [color, setColor] = useState({ color: "black" })
  const handleTab = (e, newVal) => {
    setTab(newVal);
    setColor(color)
  };

  function onChange(event) {
    setRankType(event.target.value);
  }


  return (
    <Stack bgcolor={"#f8f9fd"} pt={"5px"} pl={"100px"} pr={"100px"} direction="column" spacing={2} >

      <Stack justifyContent="space-between" direction="row" spacing={2} >


        {/* 2-Tabs  */}
        <Tabs value={tab}
          onChange={handleTab}
          TabIndicatorProps={{
            style: {
              backgroundColor: '#44924C',
              height: 4,
              // lineHeight: '-1rem'                                                                                   
            }
          }}
          textColor="black"
          fontweight="bold"
          indicatorColor="secondary"
        >
          <Tab sx={{ color: 'black', fontSize: '12px', fontWeight: '700', fontFamily: 'Poppins' }} label="All Submissions" />
          <Tab sx={{ color: 'black', fontSize: '12px', fontWeight: '700', fontFamily: 'Poppins' }} label="Favourites Submissions" />
        </Tabs>

        {/* SEARCH AND SORT */}
        <Stack direction="row" spacing={2} >
          {/* searchicon */}
          <span style={{ border: '1px solid #666666', padding: '15px 12px', borderRadius: '200px', display: 'flex', maxWidth: '500px', width: '300px' }}>
            <SearchIcon style={{ color: "gray" }}></SearchIcon> <input value={search} onChange={(e) => { setSearch(e.target.value) }} type="text" placeholder='Search' style={{ border: 'none', color: 'gray', outline: 'none', marginBottom: '2px', background: "transparent" }} />
          </span>

          {/* Sorting select */}
          <Box sx={{ maxWidth: 150, marginLeft: '1rem' }}>
            <FormControl fullWidth>
              <Select
                sx={{
                  color: '#666666',
                  borderRadius: '200px',
                  '.MuiOutlinedInput-notchedOutline': { border: '1px solid #666666' },
                  '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                    border: '1px solid #666666'
                  },
                  '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    border: '1px solid #666666'
                  },
                  fontSize: '14px',
                  fontWeight: '400',
                  fontFamily: 'Poppins'
                }}
                value={rankType}
                onChange={onChange}
              >
                {data.map((item) => (
                  <MenuItem key={item.Id} value={item.Id}>
                    {item.Ad}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Stack>
      </Stack>

      {/* Tab Content BY PROPS SENDING*/}
      <TabPanel1 value={tab} index={0} sx={{marginTop :'-1rem'}}>
        <ContentGrid rankType={rankType} search={search} onlyFavs={false} />
      </TabPanel1>
      <TabPanel1 value={tab} index={1}>
        <ContentGrid rankType={rankType} search={search} onlyFavs={true} />
      </TabPanel1>

    </Stack>

  )
}
function TabPanel1(props) {
  const { children, value, index } = props;
  return (<div>
    {value === index && children}
  </div>
  )
}
export default TabBar