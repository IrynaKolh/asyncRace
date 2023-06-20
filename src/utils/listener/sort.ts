import { storage } from '../../components/storage';
import { createWinnersList } from '../../pages/winnersPage';
import { SortOrder } from '../../types/helper';
import { updateWinners } from '../updates';
import { listenSort } from './listenSort';

export const setSortOrder = async (sortBy: string): Promise<void> => {
  storage.sortOrder = storage.sortOrder === SortOrder.Asc ? SortOrder.Desc : SortOrder.Asc;
  storage.sortBy = sortBy;

  await updateWinners();
  const winner = document.querySelector('.winner') as HTMLDivElement;
  winner.innerHTML = createWinnersList();
  listenSort();
};
