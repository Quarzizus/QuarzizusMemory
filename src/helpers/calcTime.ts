const calcTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const finalSeconds = seconds % 60;
  return [minutes, finalSeconds];
};

export { calcTime };
