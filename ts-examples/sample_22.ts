class Coordenada implements Point {
    public coordX: number;
    public coordY: number;
    public label: string;

    constructor(x: number, y:number, label: string) {
        this.coordX = x;
        this.coordY = y;
        this.label = label;
    }
}

const bio = new Coordenada(43.2603479,-2.9334110,'Bilbao');
