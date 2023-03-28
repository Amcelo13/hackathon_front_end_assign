import { Box, Grid, Stack, Tab, Tabs } from '@mui/material'
import getContentItem from './utility/getContentItem';
import getFavs from './utility/getFavs';
import getSearch from './utility/getSearch';
import rankItems from './utility/rankItems';
import getSubmissions from './utility/getSubmissions';

export default function ContentGrid({rankType, onlyFavs, search}){
  // Returning a grid that calls a function to show the data
  return <Grid mt={-3} container spacing={5}>
    {renderItems()}
  </Grid>


function renderItems(){
  let submissions = getSubmissions() //calling getSubmissions function

  if(onlyFavs) submissions = getFavs(submissions)
  if(search) submissions = getSearch(submissions, search)
  submissions = rankItems(submissions, rankType)

  return submissions.map((item,key)=>{
    return getContentItem({item,key})
  })


}
}
