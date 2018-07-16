import { AdjectiveType } from './adjective-types';

export interface JapaneseWordEntry {
    // Meaning of the word
    meaning: string;
    // The word with kanji characters
    kanji: string;
    // The word with only hirgana characters
    hiragana: string;
    // The type of the adjective
    adjectiveType: AdjectiveType;
}
