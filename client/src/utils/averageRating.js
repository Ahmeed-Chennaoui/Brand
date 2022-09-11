const averageRating = (array) => {
  const initialValue = 0;
  const length = array.length;
  const average = array.reduce(
    (prev, curr) => prev + curr.stars / length,
    initialValue
  );
  return average.toFixed(1);
};
module.exports = {
  averageRating,
};
