import { storage } from '../components/storage';
import { renderCar } from './renderCar';

export const createCarsList = () => `
<h2 class="title">Garage: ${storage.carsCount}</h2>
<h3>Page № ${storage.carsPage}</h3>
<div class="cars-list">
  ${storage.cars.map((car) => `<div class="car-item">${renderCar(car)}</div>`).join('')}
</div>
`;
