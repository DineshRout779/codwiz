export const calculateScore = (score) => {
  return score.reduce((acc, curr) => acc + curr);
};
