export default function getSearch(theList, str) {
  const searchStr = str.toLowerCase(); // convert search string to lowercase to match with item titles

  return theList.filter((item) => {
    if (item.title.toLowerCase().indexOf(searchStr) !== -1) return true;

    return false;
  });
}