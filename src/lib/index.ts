import Badwords from '../badwords.json';

export class BadwordsFilter {
    private badwords: string[];

    constructor() {
        this.badwords = Badwords;
    }

    public filter(text: string): string {
        return text.replace(new RegExp(this.badwords.join('|'), 'gi'), '****');
    }

    public detect(text: string): boolean {
        return new RegExp(this.badwords.join('|'), 'gi').test(text);
    }

    public addWords(...words: string[]): void {
        this.badwords.push(...words);
    }

    public removeWords(...words: string[]): void {
        this.badwords = this.badwords.filter(word => !words.includes(word));
    }

    public clearWords(): void {
        this.badwords = [];
    }

    public getWords(): string[] {
        return this.badwords;
    }

    public setWords(words: string[]): void {
        this.badwords = words;
    }
}