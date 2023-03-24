export default function getSearch(theList, str) {
  
  return theList.filter((item) => {
    if (item.title.toLowerCase().indexOf(str) !== -1) return true;
  
    return false;
  });
}
