import 'normalize.css';
import './style.css';
import createPage from './pages/createPage';
import { listen } from './utils/listen';
import { updateCars } from './utils/updates';

const createApp = async () => {
  createPage();
  await updateCars();
  listen();
};
createApp();
