export interface ICar {
  name: string;
  color: string;
  id: number;
}

export interface ICars {
  items: ICar[];
  count: number;
}

export interface IUpdateCar {
  name: string;
  color: string;
}

export interface IWinner {
  id: number;
  time: number;
  wins: number;
}

export interface IWinners {
  items: Array<{
    car: ICar;
    id: number;
    time: number;
    wins: number;
  }>;
  count: number;
}
