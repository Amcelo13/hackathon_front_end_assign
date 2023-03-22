import { Box, Tab, Tabs } from '@mui/material'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const DATA = [
  {
    Id: 1,
    Ad: "Newest First"
  },
  {
    Id: 2,
    Ad: "Oldest First"
  }
];
function TabBar() {
  const [val, setVal] = useState(0);
  const [data, setData] = useState(DATA);
  const [active, setActive] = useState(DATA[0].Id);


  const handleTab = (e, newVal) => {
    setVal(newVal);
  };

  function onChange(event) {
    setActive(event.target.value);
  }


  return (
     <div >
      
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    {/* Tab Headings */}
    <Box sx={{ ml: '5rem' }}>
      <Tabs value={val}
        onChange={handleTab}
        TabIndicatorProps={{
          style: {
            backgroundColor: '#0fd850',
            height: 5
          }
        }}
        textColor="black"
        fontweight="bold"
        indicatorColor="secondary"
      >
        <Tab label="All Submissions" />
        <Tab label="Favourites Submissions" />
      </Tabs>
    </Box>

    <div style={{ display: 'flex' }}>
      {/* searchicon */}
      <span style={{ border: '1px solid black', padding: '15px 12px', borderRadius: '200px', display: 'flex', maxWidth: '400px' }}>
        <SearchIcon style={{ color: "gray" }}></SearchIcon> <input type="text" placeholder='Search' style={{ border: 'none', color: 'gray', outline: 'none', marginBottom: '2px' }} />
      </span>

      {/* Sorting select */}
      <Box sx={{ maxWidth: 150, marginLeft: '1rem' }}>
        <FormControl fullWidth>
          <Select sx={{
            color: 'gray',
            borderRadius: '200px',
            ".MuiOutlinedInput-notchedOutline": { border: '1px solid black' },
            "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
            {
              border: '1px solid black',
            },
            "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              border: '1px solid black',
            },
            
          }}
            value={active} onChange={onChange}
          >
            {data.map((item) => (
              <MenuItem key={item.Id} value={item.Id}>
                {item.Ad}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  </div>

  {/* Tab Content */}
  <Box sx={{ ml: '5rem' }}>
    <TabPanel1 value={val} index={0}>item1</TabPanel1>
    <TabPanel1 value={val} index={1}>item2</TabPanel1>
  </Box>
</div>
      
  )
}
function TabPanel1(props) {
  const { children, value, index } = props;
  return (<div>
    {value === index && (<h1>{children}</h1>)}
  </div>
  )
}
export default TabBar