export const path = 'http://127.0.0.1:3000';

export type DrivingStatus = {
  success: boolean;
  id: number;
  time: number;
};

export type Race = {
  name: string;
  color: string;
  id: number;
  time: number;
};

export type GetWins = {
  page: number;
  limit?: number;
  sort?: string | null;
  order?: string | null;
};

export type SortedWay = 'wins' | 'time';

export type Engine = {
  velocity: number;
  distance: number;
};

export const MAX_WIN_PER_PAGE = 10;
export const MAX_CAR_PER_PAGE = 7;
export const GENERATE_CARS = 100;
export const COLOR_LENGTH = 6;

export enum SortBy {
  Time = 'time',
  Wins = 'wins',
}

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum View {
  Garage = 'garage',
  Winners = 'winners',
}
