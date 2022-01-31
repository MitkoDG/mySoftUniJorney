function advancedFuntions(array, order) {
  if (order === "asc") {
    array.sort((a, b) => a - b);
  } else {
    array.sort((a, b) => b - a);
  }
  return array;
}
advancedFuntions([14, 7, 17, 6, 8], "asc");
advancedFuntions([14, 7, 17, 6, 8], "desc");
