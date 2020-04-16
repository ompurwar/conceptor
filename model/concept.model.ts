export class concept {
    chapter: number;
    title: string;
    level: string;
    unit: string;
    id:string;
    constructor(unit: string, chapter: number, title: string, level: string,id:string) {
        this.unit = unit;
        this.chapter = chapter;
        this.title = title;
        this.level = level;
        this.id=id;
    }
}