import { storage } from '../../components/storage';
import { createCarsList } from '../../pages/garagePage';
import { createWinnersList } from '../../pages/winnersPage';
import { View } from '../../types/helper';
import { updateCars, updateWinners } from '../updates';
import { carListener, updateOneCar } from './carListener';
import { listenSort } from './listenSort';

// eslint-disable-next-line max-lines-per-function
export const paginationListener = () => {
  const garageRace = document.querySelector('.garage-race') as HTMLDivElement;
  const prevBtn = document.querySelector('.prev-button') as HTMLButtonElement;
  const nextBtn = document.querySelector('.next-button') as HTMLButtonElement;
  const winner = document.querySelector('.winner') as HTMLDivElement;
  prevBtn.addEventListener('click', async () => {
    switch (storage.view) {
      case View.Garage: {
        storage.carsPage -= 1;
        await updateCars();
        garageRace.innerHTML = createCarsList();
        carListener();
        updateOneCar();
        break;
      }
      case View.Winners: {
        storage.winnersPage -= 1;
        await updateWinners();
        winner.innerHTML = createWinnersList();
        listenSort();
        break;
      }
      default:
    }
  });
  nextBtn.addEventListener('click', async () => {
    switch (storage.view) {
      case View.Garage: {
        storage.carsPage += 1;
        await updateCars();
        garageRace.innerHTML = createCarsList();
        carListener();
        updateOneCar();
        break;
      }
      case View.Winners: {
        storage.winnersPage += 1;
        await updateWinners();
        winner.innerHTML = createWinnersList();
        listenSort();
        break;
      }
      default:
    }
  });
};
