import { GetWins, MAX_WIN_PER_PAGE, path } from '../types/helper';
import { IWinner, IWinners } from '../types/interfaces';
import { getCar } from './car';

const winners = `${path}/winners`;

const getSortOrder = (sort?: string | null, order?: string | null) => {
  if (sort && order) return `&_sort=${sort}&_order=${order}`;
  return '';
};

export const getWinners = async ({ page, limit = MAX_WIN_PER_PAGE, sort, order }: GetWins): Promise<IWinners> => {
  const response = await fetch(`${winners}?_page=${page}&_limit=${limit}${getSortOrder(sort, order)}`);
  const items = await response.json();
  return {
    items: await Promise.all(
      items.map(async (winner: IWinner) => ({
        ...winner,
        car: await getCar(winner.id),
      }))
    ),
    count: Number(response.headers.get('X-Total-Count')),
  };
};

export const getWinner = async (id: number): Promise<IWinner> => (await fetch(`${winners}/${id}`)).json();

export const deleteWinner = async (id: number) => (await fetch(`${winners}/${id}`, { method: 'DELETE' })).json();

export const createWinner = async (body: IWinner) =>
  (
    await fetch(`${winners}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export const updateWinner = async (id: number, body: IWinner) =>
  (
    await fetch(`${winners}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export const getWinnerStatus = async (id: number) => (await fetch(`${winners}/${id}`)).status;

export const saveWinners = async ({ id, time }: { id: number; time: number }): Promise<void> => {
  const winnerStatus = await getWinnerStatus(id);

  if (winnerStatus === 404) {
    await createWinner({
      id,
      wins: 1,
      time,
    });
  } else {
    const winner = await getWinner(id);
    await updateWinner(id, {
      id,
      wins: winner.wins + 1,
      time: time < winner.time ? time : winner.time,
    });
  }
};
