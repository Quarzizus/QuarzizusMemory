const randomSorting = (elements: number[]) => {
  return elements.sort(() => 0.5 - Math.random());
};

export { randomSorting };
