import { SortBy } from '../../types/helper';
import { setSortOrder } from './sort';

export const listenSort = async () => {
  const sortByWins = document.getElementById('sort-by-wins') as HTMLButtonElement;
  const sortByTimer = document.getElementById('sort-by-time') as HTMLButtonElement;

  sortByWins.addEventListener('click', async () => {
    setSortOrder(SortBy.Wins);
  });

  sortByTimer.addEventListener('click', async () => {
    setSortOrder(SortBy.Time);
  });
};
