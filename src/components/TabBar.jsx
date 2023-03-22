import { Box, Tab, Tabs } from '@mui/material'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


function TabBar() {
  const [val, setVal] = useState(0);
  const [age, setAge] = useState("");

  const handleSort = (e) => {
    setAge(e.target.value);
  };
  const handleTab = (e, newVal) => {
    setVal(newVal);
  };


  return (
    <>
      <Box sx={{ ml: '5rem ' }}>
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

      {/* searchicon */}
      <SearchIcon></SearchIcon>

      {/* Sorting select */}
      <Box sx={{ maxWidth: 200,}}>
        <FormControl fullWidth>
          <Select sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
              }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleSort}
          >
            <MenuItem value={10} defaultValue>Newest First</MenuItem>
            <MenuItem value={20}>Oldest First</MenuItem>
          </Select>
        </FormControl>
      </Box>

         {/* Tab Content */}
      <TabPanel1 value={val} index={0}>item1</TabPanel1>
      <TabPanel1 value={val} index={1}>item2</TabPanel1>
    </>

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