import { storage } from '../../components/storage';
import { createWinnersList } from '../../pages/winnersPage';
import { View } from '../../types/helper';
import { updateWinners } from '../updates';
import { listenSort } from './listenSort';

export default function appView() {
  const menu = document.querySelector('.menu') as HTMLDivElement;
  const garageBtn = document.querySelector('.garage-btn') as HTMLButtonElement;
  const winnersBtn = document.querySelector('.winners-btn') as HTMLButtonElement;
  menu.addEventListener('click', async (e) => {
    if ((<HTMLButtonElement>e.target).classList.contains('garage-btn')) {
      (<HTMLElement>document.querySelector('.garage')).style.display = 'block';
      (<HTMLElement>document.querySelector('.winner')).style.display = 'none';
      garageBtn.classList.add('active-btn');
      winnersBtn.classList.remove('active-btn');
      storage.view = View.Garage;
    }
    if ((<HTMLButtonElement>e.target).classList.contains('winners-btn')) {
      (<HTMLElement>document.querySelector('.garage')).style.display = 'none';
      (<HTMLElement>document.querySelector('.winner')).style.display = 'block';
      await updateWinners();
      (<HTMLElement>document.querySelector('.winner')).innerHTML = createWinnersList();
      garageBtn.classList.remove('active-btn');
      winnersBtn.classList.add('active-btn');
      listenSort();
      storage.view = View.Winners;
    }
  });
}
