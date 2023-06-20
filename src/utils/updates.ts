import { getCars } from '../components/car';
import { storage } from '../components/storage';
import { getWinners } from '../components/winner';
import { MAX_CAR_PER_PAGE, MAX_WIN_PER_PAGE } from '../types/helper';

export const updateCars = async () => {
  const prevBtn = document.getElementById('prev') as HTMLButtonElement;
  const nextBtn = document.getElementById('next') as HTMLButtonElement;
  const { items, count } = await getCars(storage.carsPage);
  storage.cars = items;
  storage.carsCount = count;
  if (storage.carsPage * MAX_CAR_PER_PAGE < storage.carsCount) {
    nextBtn.disabled = false;
  } else {
    nextBtn.disabled = true;
  }
  if (storage.carsPage > 1) {
    prevBtn.disabled = false;
  } else {
    prevBtn.disabled = true;
  }
};

export const updateWinners = async (): Promise<void> => {
  const prevBtn = document.getElementById('prev') as HTMLButtonElement;
  const nextBtn = document.getElementById('next') as HTMLButtonElement;
  const { items, count } = await getWinners({
    page: storage.winnersPage,
    sort: storage.sortBy,
    order: storage.sortOrder,
  });

  storage.winners = items;
  storage.winnersCount = count;
  if (storage.winnersPage * MAX_WIN_PER_PAGE < storage.winnersCount) {
    nextBtn.disabled = false;
  } else {
    nextBtn.disabled = true;
  }
  if (storage.winnersPage > 1) {
    prevBtn.disabled = false;
  } else {
    prevBtn.disabled = true;
  }
};
