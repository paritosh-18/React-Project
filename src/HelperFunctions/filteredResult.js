function filteredResult(searchTxt, restrauntList) {
  const filteredData = restrauntList.filter((restraunt) =>
    restraunt.info.name.toLowerCase().includes(searchTxt.toLowerCase())
  );

  return filteredData;
}

export default filteredResult;
