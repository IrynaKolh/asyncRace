import { brandsCars } from '../types/brands-cars';
import { COLOR_LENGTH, GENERATE_CARS } from '../types/helper';
import { IUpdateCar } from '../types/interfaces';
import { modelsCars } from '../types/models-cars';

const getRandomName = () => {
  const model = modelsCars[Math.floor(Math.random() * modelsCars.length)];
  const name = brandsCars[Math.floor(Math.random() * modelsCars.length)];
  return `${name} ${model}`;
};

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < COLOR_LENGTH; i++) {
    color += letters[Math.floor(Math.random() * 6)];
  }
  return color;
};

export const getRandomCars = (count = GENERATE_CARS): IUpdateCar[] =>
  new Array(count).fill(1).map(() => ({ name: getRandomName(), color: getRandomColor() }));
