export interface ApiRobot {
  _id: string;
  name: string;
  image: string;
  speed: number;
  endurance: number;
}

export interface Robot extends Omit<ApiRobot, "_id"> {
  id: number;
  name: string;
  image: string;
  speed: number;
  endurance: number;
}
