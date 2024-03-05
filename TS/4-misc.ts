interface Car {
  wheels: number;
  engine: string;

  [key: string]: unknown
}

const MyTesla: Car= {
  wheels: 4,
  engine: 'electric',
  cameras: 20,

}

const MyTesla: Car= Tesla;    // Kein Typescript error. cameras gibt es nicht in car