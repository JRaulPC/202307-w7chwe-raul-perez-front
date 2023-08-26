export interface ApiRobot {
  robots: [
    {
      _id: string;
      name: string;
      image: string;
      speed: number;
      endurance: number;
    },
  ];
}

export interface Robot extends Omit<ApiRobot, "_id" | "robots"> {
  id: number;
}
