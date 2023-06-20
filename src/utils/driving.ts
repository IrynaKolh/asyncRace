import { storage } from '../components/storage';
import { DrivingStatus, Engine, path } from '../types/helper';
import { animation, getDistanceBetweenElements } from './animation';

const engine = `${path}/engine`;

const startEngine = async (id: number): Promise<Engine> =>
  (await fetch(`${engine}?id=${id}&status=started`, { method: 'PATCH' })).json();

const stopEngine = async (id: number): Promise<Engine> =>
  (await fetch(`${engine}?id=${id}&status=stopped`, { method: 'PATCH' })).json();

const drive = async (id: number): Promise<{ success: boolean }> => {
  const res = await fetch(`${engine}?id=${id}&status=drive`, { method: 'PATCH' }).catch();
  return res.status !== 200 ? { success: false } : { ...(await res.json()) };
};

export const startDriving = async (id: number): Promise<DrivingStatus> => {
  const startBtn = document.getElementById(`start-engine-car-${id}`) as HTMLButtonElement;
  const stopBtn = document.getElementById(`stop-engine-car-${id}`) as HTMLButtonElement;
  startBtn.disabled = true;
  stopBtn.disabled = false;
  const { velocity, distance } = await startEngine(id);
  const time = Math.round(distance / velocity);
  const car = document.getElementById(`car-img-${id}`);
  const flag = document.getElementById(`flag-${id}`);
  const htmlDistance = Math.floor(getDistanceBetweenElements(<HTMLButtonElement>car, <HTMLButtonElement>flag)) + 100;
  storage.animation[id] = animation(<HTMLButtonElement>car, htmlDistance, time);
  const { success } = await drive(id);
  if (!success) window.cancelAnimationFrame(storage.animation[id].id);
  startBtn.disabled = false;
  stopBtn.disabled = true;
  return { success, id, time };
};

export const stopDriving = async (id: number) => {
  const stopBtn = document.getElementById(`stop-engine-car-${id}`) as HTMLButtonElement;
  const startBtn = document.getElementById(`start-engine-car-${id}`) as HTMLButtonElement;
  stopBtn.disabled = true;
  await stopEngine(id);
  startBtn.disabled = false;
  const car = document.getElementById(`car-img-${id}`);
  if (car) car.style.transform = 'translateX(0)';
  if (storage.animation[id]) window.cancelAnimationFrame(storage.animation[id].id);
};
