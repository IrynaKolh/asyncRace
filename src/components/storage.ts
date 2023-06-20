import { getCars } from './car';
import { getWinners } from './winner';

const { items: cars, count: carsCount } = await getCars(1);
const { items: winners, count: winnersCount } = await getWinners({ page: 1 });
const animation: { [key: number]: { id: number } } = {};

export const storage = {
  carsPage: 1,
  winnersPage: 1,
  cars,
  carsCount,
  winners,
  winnersCount,
  animation,
  view: 'garage',
  sortBy: '',
  sortOrder: '',
  selectedCarID: null,
};
