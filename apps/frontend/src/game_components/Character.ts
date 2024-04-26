export class Character {
    public name: string;
    public health: number;
    public speed: number;
    public dimensions: {width: number, height: number};

    constructor(name: string, health: number, speed: number, dimensions: {width: number, height: number} ){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.dimensions = dimensions;
    }
}
