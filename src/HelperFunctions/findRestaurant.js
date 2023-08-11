function findRestaurant(arr) {
  let data = arr.map((e, ind) => {
    if (e?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
      return ind;
    }
  });

  data = data.filter((e) => e !== undefined);

  return data[0];
}

export default findRestaurant;
