import { startDriving, stopDriving } from '../driving';

export const engineListener = () => {
  document.body.addEventListener('click', async (event) => {
    if ((<HTMLButtonElement>event.target).classList.contains('start-engine-btn')) {
      const id = +(<HTMLButtonElement>event.target).id.split('start-engine-car-')[1];
      startDriving(id);
    }
    if ((<HTMLButtonElement>event.target).classList.contains('stop-engine-btn')) {
      const id = +(<HTMLButtonElement>event.target).id.split('stop-engine-car-')[1];
      stopDriving(id);
    }
  });
};
