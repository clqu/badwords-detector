export declare class BadwordsFilter {
    private badwords;
    constructor();
    filter(text: string): string;
    detect(text: string): boolean;
    addWords(...words: string[]): void;
    removeWords(...words: string[]): void;
    clearWords(): void;
    getWords(): string[];
    setWords(words: string[]): void;
}
