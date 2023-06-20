import { path } from '../types/helper';
import { ICar, ICars, IUpdateCar } from '../types/interfaces';

const garage = `${path}/garage`;

export const getCars = async (page?: number, limit = 7): Promise<ICars> => {
  const res = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
  const items = await res.json();
  const count = Number(res.headers.get('X-Total-Count'));
  const data = { items, count };
  return data;
};

export const createCar = async (request: IUpdateCar) => {
  const response = await fetch(`${garage}`, {
    method: 'POST',
    body: JSON.stringify(request),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};

export const getCar = async (id: number): Promise<ICar> => (await fetch(`${garage}/${id}`)).json();

export const deleteCar = async (id: number) =>
  (
    await fetch(`${garage}/${id}`, {
      method: 'DELETE',
    })
  ).json();

export const updateCar = async (body: IUpdateCar, id: number) => {
  console.log('updateCar1');

  const response = await fetch(`${garage}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};
