function FilterActivities(array, filters) {
  const getValue = (value) => (typeof value === 'string' ? value.toUpperCase() : value);

  const filterKeys = Object.keys(filters);
  return array.filter((item) =>
    // validates all filter criteria
    // eslint-disable-next-line implicit-arrow-linebreak
    filterKeys.every((key) => {
      // ignores an empty filter
      if (!filters[key].length) return true;
      return filters[key].find((filter) => getValue(filter) === getValue(item[key]));
    }));
}

export default FilterActivities;
