export class Recipe {
    public name: string;
    public decsription: string;
    public imagePath: string;

    constructor(name: string, decsription: string, imagePath: string) {
        this.name = name;
        this.decsription = decsription;
        this.imagePath = imagePath;
    }
}