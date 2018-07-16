import { AdjectiveType } from './adjective-types';
import { JapaneseWordEntry } from './word-entry';

export { AdjectiveType } from './adjective-types';
export { JapaneseWordEntry } from './word-entry';

// formal present affirmative
export function getFormalPresentAffirmative(wordEntry: JapaneseWordEntry): string {
    const adjType = wordEntry.adjectiveType;
    if (adjType === AdjectiveType.I || adjType === AdjectiveType.NA) {
        return wordEntry.kanji + 'です';
    }
    throw new Error(`Could not determine formal present affirmative for unknown adjective: ${wordEntry.kanji}`);
}

// formal present negative
export function getFormalPresentNegative(wordEntry: JapaneseWordEntry): string {
    const shortPresent = getShortPresentNegative(wordEntry);
    return shortPresent + 'です';
}

// formal past affirmative
export function getFormalPastAffirmative(wordEntry: JapaneseWordEntry): string {
    const adjType = wordEntry.adjectiveType;
    if (adjType === AdjectiveType.NA) {
        return wordEntry.kanji + 'でした';
    }
    if (adjType === AdjectiveType.I) {
        const shortPast = getShortPastAffirmative(wordEntry);
        return shortPast + 'です';
    }
    throw new Error(`Could not determine formal present affirmative for unknown adjective: ${wordEntry.kanji}`);
}

// formal past negative
export function getFormalPastNegative(wordEntry: JapaneseWordEntry): string {
    const shortPast = getShortPastNegative(wordEntry);
    return shortPast + 'です';
}

// short present affirmative
export function getShortPresentAffirmative(wordEntry: JapaneseWordEntry): string {
    const adjType = wordEntry.adjectiveType;
    if (adjType === AdjectiveType.NA) {
        return wordEntry.kanji + 'だ';
    }
    if (adjType === AdjectiveType.I) {
        return wordEntry.kanji;
    }
    throw new Error(`Could not determine short present affirmative for unknown adjective: ${wordEntry.kanji}`);
}

// short present negative
export function getShortPresentNegative(wordEntry: JapaneseWordEntry): string {
    const adjType = wordEntry.adjectiveType;
    const word = wordEntry.kanji;
    if (adjType === AdjectiveType.NA) {
        return word + 'じゃない';
    }
    if (adjType === AdjectiveType.I) {
        return word.substring(0, word.length - 1) + 'くない';
    }
    throw new Error(`Could not determine short present negative for unknown adjective: ${word}`);
}

// short past affirmative
export function getShortPastAffirmative(wordEntry: JapaneseWordEntry): string {
    const adjType = wordEntry.adjectiveType;
    const word = wordEntry.kanji;
    if (adjType === AdjectiveType.NA) {
        return word + 'だった';
    }
    if (adjType === AdjectiveType.I) {
        return word.substring(0, word.length - 1) + 'かった';
    }
    throw new Error(`Could not determine short past affirmative for unknown adjective: ${word}`);
}

// short past negative
export function getShortPastNegative(wordEntry: JapaneseWordEntry): string {
    const adjType = wordEntry.adjectiveType;
    const word = wordEntry.kanji;
    if (adjType === AdjectiveType.NA) {
        return word + 'じゃなかった';
    }
    if (adjType === AdjectiveType.I) {
        return word.substring(0, word.length - 1) + 'くなかった';
    }
    throw new Error(`Could not determine short past negative for unknown adjective: ${word}`);
}
