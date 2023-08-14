export function filteredResult(searchTxt, restrauntList) {
  const filteredData = restrauntList.filter((restraunt) =>
    restraunt.info.name.toLowerCase().includes(searchTxt.toLowerCase())
  );

  return filteredData;
}

export function findRestaurant(arr) {
  let data = arr.map((e, ind) => {
    if (e?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
      return ind;
    }
  });

  data = data.filter((e) => e !== undefined);

  return data[0];
}
