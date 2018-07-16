// Take in the dictionary form of a verb and conjugate it
import { endsWith } from '../utils';

import { U_VERB_SUFFIX_TO_I, U_VERB_SUFFIX_TO_ANAI, TE_FORM_SUFFIX_TO_A } from './constants';
import { JapaneseWordEntry } from './word-entry';
import { JapaneseVerbType } from './verb-types';

export { JapaneseWordEntry } from './word-entry';
export { JapaneseVerbType } from './verb-types';


// ============================================================================
// Formal Conjugations
// ============================================================================

// formal present affirmative
export function getFormalPresentAffirmative(wordEntry: JapaneseWordEntry): string {
    const verbStem = getVerbStem(wordEntry);
    return `${verbStem}ます`;
}

// formal present negative
export function getFormalPresentNegative(wordEntry: JapaneseWordEntry): string {
    const verbStem = getVerbStem(wordEntry);
    return `${verbStem}ません`;
}

// formal past affirmative
export function getFormalPastAffirmative(wordEntry: JapaneseWordEntry): string {
    const verbStem = getVerbStem(wordEntry);
    return `${verbStem}ました`;
}

// formal past negative
export function getFormalPastNegative(wordEntry: JapaneseWordEntry): string {
    const verbStem = getVerbStem(wordEntry);
    return `${verbStem}ませんでした`;
}


// ============================================================================
// Short Form Conjugations
// ============================================================================

// short present affirmative
export function getShortPresentAffirmative(wordEntry: JapaneseWordEntry): string {
    // Same as dictionary form
    return wordEntry.kanji;
}

// short present negative
export function getShortPresentNegative(wordEntry: JapaneseWordEntry): string {
    const word = wordEntry.kanji;
    const verbType = wordEntry.verbType;
    
    // ru verb
    if (verbType === JapaneseVerbType.RU_VERB) {
        return word.substring(0, word.length - 1) + 'ない';
    }
    
    // u verb
    if (verbType === JapaneseVerbType.U_VERB) {
        // Handle special case for 'ある'
        if (word === 'ある') {
            return 'ない';
        }
        // Replace '-u' with '-anai'
        const suffix = U_VERB_SUFFIX_TO_ANAI[word.charAt(word.length - 1)];
        if (!suffix) {
            throw new Error('Could not determine short present negative conjugation of unknown u verb');
        }
        return word.substring(0, word.length - 1) + suffix;
    }
    
    // irr verb
    if (wordEntry.verbType === JapaneseVerbType.IRREGULAR_VERB) {
        if (endsWith(word, '来る')) {
            return word.substring(0, word.length - 2) + '来ない';
        }
        if (endsWith(word, 'する')) {
            return word.substring(0, word.length - 2) + 'しない';
        }
        throw new Error(`Could not determine short present negative of unknown irregular verb: ${word}`);
    }

    throw new Error(`Could not determine short present negative of unknown verb: ${word}`);
}

// short past affirmative
export function getShortPastAffirmative(wordEntry: JapaneseWordEntry): string {
    // Convert to the te form
    const teForm = getTeForm(wordEntry);

    const suffix = TE_FORM_SUFFIX_TO_A[teForm.charAt(teForm.length - 1)];
    if (!suffix) {
        throw new Error(`Could not determine short past affirmative for word: ${wordEntry.kanji}`);
    }
    return teForm.substring(0, teForm.length - 1) + suffix;
}

// short past negative
export function getShortPastNegative(wordEntry: JapaneseWordEntry): string {
    // Just get the short present negative form and replace -i with -katta
    const shortPresent = getShortPresentNegative(wordEntry);
    return shortPresent.substring(0, shortPresent.length - 1) + 'かった';
}


// ============================================================================
// Other Conjugations
// ============================================================================

// te-form
export function getTeForm(wordEntry: JapaneseWordEntry): string {
    const word = wordEntry.kanji;
    // ru verb replace te with ru
    if (wordEntry.verbType === JapaneseVerbType.RU_VERB) {
        return word.substring(0, word.length - 1) + 'て';
    }

    if (wordEntry.verbType === JapaneseVerbType.U_VERB) {
        const lastChar = word.charAt(word.length - 1);
        switch (lastChar) {
            case 'う':
            case 'つ':
            case 'る':
                return word.substring(0, word.length - 1) + 'って';
            case 'む':
            case 'ぶ':
            case 'ぬ':
                return word.substring(0, word.length - 1) + 'んで';
            case 'く':
                if (word === '行く') {
                    return '行って';
                }
                return word.substring(0, word.length - 1) + 'いて';
            case 'ぐ':
                return word.substring(0, word.length - 1) + 'いで';
            case 'す':
                return word.substring(0, word.length - 1) + 'して';
            default:
                throw new Error(`Could not determine te form of u verb: ${word}`);
        }
    }

    // irregular verbs - suru = shite kuru kite
    if (wordEntry.verbType === JapaneseVerbType.IRREGULAR_VERB) {
        if (endsWith(word, '来る')) {
            return word.substring(0, word.length - 2) + '来て';
        }
        if (endsWith(word, 'する')) {
            return word.substring(0, word.length - 2) + 'して';
        }
        throw new Error(`Could not determine te form of unknown irregular verb: ${word}`);
    }

    throw new Error(`Could not determine te form of verb: ${word}`);
}

// verb stem
export function getVerbStem(wordEntry: JapaneseWordEntry): string {
    const word = wordEntry.kanji;
    // ru-verb
    if (wordEntry.verbType === JapaneseVerbType.RU_VERB) {
        return word.substring(0, word.length - 1);
    }

    // irregular verb
    if (wordEntry.verbType === JapaneseVerbType.IRREGULAR_VERB) {
        if (endsWith(word, '来る')) {
            return word.substring(0, word.length - 1);
        }
        if (endsWith(word, 'する')) {
            return word.substring(0, word.length - 2) + 'し';
        }
        throw new Error('Could not determine verb stem of unknown irregular verb');
    }

    // u-verb
    // Get the last character and find its 'I' character
    const iChar = U_VERB_SUFFIX_TO_I[wordEntry.kanji.charAt(wordEntry.kanji.length - 1)];
    if (!iChar) {
        throw new Error(`I character not found for verb: ${wordEntry.kanji}`);
    }
    return word.substring(0, word.length - 1) + iChar;
}
