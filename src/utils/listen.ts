import appView from './listener/appView';
import { carListener, updateOneCar } from './listener/carListener';
import { listenControls } from './listener/controls';
import { engineListener } from './listener/engine';
import { paginationListener } from './listener/pagination';
import { createOneCar } from './listener/createOneCar';

export const listen = async () => {
  appView();
  carListener();
  listenControls();
  engineListener();
  paginationListener();
  updateOneCar();
  createOneCar();
};
