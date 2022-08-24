interface params {
  min: number;
  max: number;
  length: number;
}

const randomArray = ({ min, max, length }: params): number[] => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const results: number[] = [];

  for (let i = 0; i < length; ) {
    const randomInt = Math.floor(Math.random() * (max - min + 1) + min);
    if (results.includes(randomInt)) continue;
    results[i] = randomInt;
    i++;
  }

  return results;
};

export { randomArray };
