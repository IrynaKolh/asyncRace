import { getCarColor } from '../components/carColor';
import { storage } from '../components/storage';
import { SortBy } from '../types/helper';

export const createWinnersList = () => `
  <h2 class="title">Winners: ${storage.winnersCount}</h2>
  <h3>Page № ${storage.winnersPage}</h3>
  <table class="table" cellspacing ="0" border="0" cellpadding="0" >
    <thead>
      <th>Number</th>
      <th>Car</th>
      <th>Name</th>
      <th class="table-button table-wins ${
        storage.sortBy === SortBy.Wins ? storage.sortOrder : ''
      }"	id="sort-by-wins">Wins</th>
            <th class="table-button table-time ${
              storage.sortBy === SortBy.Time ? storage.sortOrder : ''
            }"	id="sort-by-time">Best time (sec)</th>
    </thead>
    <tbody class="table-body">
      ${storage.winners
        .map(
          (winner, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${getCarColor(winner.car.color)}</td>
        <td>${winner.car.name}</td>
        <td>${winner.wins}</td>
        <td>${winner.time}</td> 
      </tr>      
      `
        )
        .join('')}
    </tbody>
  </table>
`;
