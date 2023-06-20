import { storage } from '../components/storage';
import { DrivingStatus, Race } from '../types/helper';
import { ICar } from '../types/interfaces';

export const raceAll = async (promises: Array<Promise<DrivingStatus>>, ids: number[]): Promise<Race> => {
  const { success, id, time } = await Promise.race(promises);
  if (!success) {
    const failedIndex = ids.findIndex((i) => i === id);
    const restPromises = [...promises.slice(0, failedIndex), ...promises.slice(failedIndex + 1, promises.length)];
    const restIds = [...ids.slice(0, failedIndex), ...ids.slice(failedIndex + 1, ids.length)];
    return raceAll(restPromises, restIds);
  }
  const winner: ICar = storage.cars.filter((car: ICar): boolean => car.id === id)[0];
  return {
    ...winner,
    time: Number((time / 1000).toFixed(2)),
  };
};

export const race = async (action: { (id: number): Promise<DrivingStatus> }): Promise<Race> => {
  const promises = storage.cars.map(({ id }) => action(id));
  const winner = await raceAll(
    promises,
    storage.cars.map((car: { name: string; color: string; id: number }) => car.id)
  );
  return winner;
};
