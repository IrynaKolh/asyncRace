import { deleteCar, getCar, updateCar } from '../../components/car';
import { deleteWinner } from '../../components/winner';
import { createCarsList } from '../../pages/garagePage';
import { updateCars } from '../updates';

let selectedCar: { name: string; color: string; id: number };

export const carListener = () => {
  const controlCar = document.querySelectorAll('.controls-car') as NodeList;
  const garageRace = document.querySelector('.garage-race') as HTMLDivElement;
  const updateName = document.getElementById('update-name') as HTMLInputElement;
  const updateColor = document.getElementById('update-color') as HTMLInputElement;
  controlCar.forEach((car) => {
    car.addEventListener('click', async (e) => {
      if (e.target instanceof HTMLButtonElement) {
        if (e.target.classList.contains('remove-btn')) {
          const id = +e.target.id.split('remove-car-')[1];
          await deleteCar(id);
          await deleteWinner(id);
          await updateCars();
          garageRace.innerHTML = createCarsList();
          carListener();
        }
        if (e.target.classList.contains('select-btn')) {
          selectedCar = await getCar(+(<HTMLButtonElement>e.target).id.split('select-car-')[1]);
          updateName.value = selectedCar.name;
          updateColor.value = selectedCar.color;
          updateName.disabled = false;
          updateColor.disabled = false;
          const updateBtn = document.getElementById('update-btn') as HTMLButtonElement;
          updateBtn.disabled = false;
        }
      }
    });
  });
};

export const updateOneCar = () => {
  const garageRace = document.querySelector('.garage-race') as HTMLDivElement;
  const updateForm = document.getElementById('update') as HTMLFormElement;
  updateForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const updateBtn = document.getElementById('update-btn') as HTMLButtonElement;
    const updateName = document.getElementById('update-name') as HTMLInputElement;
    const updateColor = document.getElementById('update-color') as HTMLInputElement;
    const car = {
      name: updateName.value,
      color: updateColor.value,
    };
    await updateCar(car, selectedCar.id);
    await updateCars();
    garageRace.innerHTML = createCarsList();
    updateName.value = '';
    updateName.disabled = true;
    updateColor.disabled = true;
    updateColor.value = '';
    carListener();
    updateOneCar();
    updateBtn.disabled = true;
  });
};
