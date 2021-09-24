export const filteringAnArray = (array, filterString) => {
  return array.filter((arrayElement) => {
    console.log("arrayElement.price", arrayElement.price);
    console.log("parseInt(filterString)", parseInt(filterString));
    return arrayElement.price <= parseInt(filterString);
  });
};
