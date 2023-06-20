import { createCar } from '../../components/car';
import { createCarsList } from '../../pages/garagePage';
import { updateCars } from '../updates';

export const createOneCar = () => {
  const garageRace = document.querySelector('.garage-race') as HTMLDivElement;
  const createForm = document.getElementById('create') as HTMLFormElement;
  createForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const createName = document.getElementById('create-name') as HTMLButtonElement;
    const createColor = document.getElementById('create-color') as HTMLButtonElement;
    const car = {
      name: createName.value,
      color: createColor.value,
    };
    await createCar(car);
    await updateCars();

    garageRace.innerHTML = createCarsList();
    createName.value = '';
    createColor.value = '';
  });
};
