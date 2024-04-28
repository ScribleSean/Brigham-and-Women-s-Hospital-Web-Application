export class Character {
  public name: string;
  public health: number;
  public speed: number;
  public dimensions: { width: number; height: number };
  public passive: string;
  public frames: Array<string>;
  public role: string;
  public quote: string;
  public backstory: string;

  constructor(
    name: string,
    health: number,
    speed: number,
    dimensions: { width: number; height: number },
    passive: string,
    frames: Array<string>,
    role: string,
    quote: string,
    backstory: string,
  ) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.dimensions = dimensions;
    this.frames = frames;
    this.passive = passive;
    this.role = role;
    this.backstory = backstory;
    this.quote = quote;
  }
}
