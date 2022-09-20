"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadwordsFilter = void 0;
const badwords_json_1 = __importDefault(require("../badwords.json"));
class BadwordsFilter {
    badwords;
    constructor() {
        this.badwords = badwords_json_1.default;
    }
    filter(text) {
        return text.replace(new RegExp(this.badwords.join('|'), 'gi'), '****');
    }
    detect(text) {
        return new RegExp(this.badwords.join('|'), 'gi').test(text);
    }
    addWords(...words) {
        this.badwords.push(...words);
    }
    removeWords(...words) {
        this.badwords = this.badwords.filter(word => !words.includes(word));
    }
    clearWords() {
        this.badwords = [];
    }
    getWords() {
        return this.badwords;
    }
    setWords(words) {
        this.badwords = words;
    }
}
exports.BadwordsFilter = BadwordsFilter;
