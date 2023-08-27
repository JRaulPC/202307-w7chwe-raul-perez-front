import { ApiRobots, Robot } from "../types";

export const robotsMock: Robot[] = [
  {
    id: "1",
    name: "R2-D2",
    image:
      "https://lh3.googleusercontent.com/blogger_img_proxy/AAOd8MwNN0KE-2bXtP1qce-myhfL1CzGShpU5CJdFCOpIue13d5NjViqjw8wB_u7Jdn2wgSfOe8LCPKI8vottgoknArtNgwleoCuB1CA7qYoRaz_ux4aF5bR8DDHG8_kZ3x22UfXe4w=s0-d",
    speed: 4,
    endurance: 10,
  },
  {
    id: "2",
    name: "Emilio",
    image:
      "https://s2.qwant.com/thumbr/0x380/e/f/6cae248a48d649f6bd26a2837823c9c8c98dff19732b274ad10dea5e54e394/MzY4MjM4MQ.jpeg?u=https%3A%2F%2Fspectrum.ieee.org%2Fimage%2FMzY4MjM4MQ.jpeg&q=0&b=1&p=0&a=0",
    speed: 4,
    endurance: 10,
  },

  {
    id: "3",
    name: "Terminator",
    image:
      "https://2.bp.blogspot.com/-_prBdZ_YjEk/VaSywp5FKXI/AAAAAAAAAPY/3qdaZ4Mn4lY/s1600/papero%2B2.jpg",
    speed: 4,
    endurance: 8,
  },
];

export const apiRobotsMock: ApiRobots = {
  robots: [
    {
      _id: "1",
      name: "R2-D2",
      image:
        "https://lh3.googleusercontent.com/blogger_img_proxy/AAOd8MwNN0KE-2bXtP1qce-myhfL1CzGShpU5CJdFCOpIue13d5NjViqjw8wB_u7Jdn2wgSfOe8LCPKI8vottgoknArtNgwleoCuB1CA7qYoRaz_ux4aF5bR8DDHG8_kZ3x22UfXe4w=s0-d",
      speed: 4,
      endurance: 10,
    },
    {
      _id: "2",
      name: "Emilio",
      image:
        "https://s2.qwant.com/thumbr/0x380/e/f/6cae248a48d649f6bd26a2837823c9c8c98dff19732b274ad10dea5e54e394/MzY4MjM4MQ.jpeg?u=https%3A%2F%2Fspectrum.ieee.org%2Fimage%2FMzY4MjM4MQ.jpeg&q=0&b=1&p=0&a=0",
      speed: 4,
      endurance: 10,
    },
    {
      _id: "3",
      name: "Terminator",
      image:
        "https://2.bp.blogspot.com/-_prBdZ_YjEk/VaSywp5FKXI/AAAAAAAAAPY/3qdaZ4Mn4lY/s1600/papero%2B2.jpg",
      speed: 4,
      endurance: 8,
    },
  ],
};
