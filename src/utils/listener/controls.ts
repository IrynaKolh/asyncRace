import { createCar } from '../../components/car';
import { storage } from '../../components/storage';
import { saveWinners } from '../../components/winner';
import { createCarsList } from '../../pages/garagePage';
import { startDriving, stopDriving } from '../driving';
import { race } from '../race';
import { getRandomCars } from '../ramdomCars';
import { updateCars } from '../updates';

export const listenControls = () => {
  const garageRace = document.querySelector('.garage-race') as HTMLDivElement;
  const raceBtn = document.querySelector('.race-btn') as HTMLButtonElement;
  const resetBtn = document.querySelector('.reset-btn') as HTMLButtonElement;
  const generateBtn = document.querySelector('.generator-btn') as HTMLButtonElement;
  generateBtn.addEventListener('click', async () => {
    generateBtn.disabled = true;
    const cars = getRandomCars();
    await Promise.all(cars.map(async (car) => createCar(car)));
    await updateCars();
    garageRace.innerHTML = createCarsList();
    generateBtn.disabled = false;
  });

  raceBtn.addEventListener('click', async () => {
    raceBtn.disabled = true;
    resetBtn.disabled = false;
    const winner = await race(startDriving);
    await saveWinners(winner);
    const message = document.getElementById(`message-broke-down-engine-${winner.id}`) as HTMLElement;
    message.innerHTML = `${winner.name} win for ${winner.time} secs!`;
    message.classList.remove('hidden');
    setTimeout(() => {
      message.classList.add('hidden');
    }, 3000);
    updateCars();
  });

  resetBtn.addEventListener('click', async () => {
    resetBtn.disabled = true;
    storage.cars.map(({ id }) => stopDriving(id));
    raceBtn.disabled = false;
    updateCars();
  });
};
