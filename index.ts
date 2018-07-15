// Take in the dictionary form of a verb and conjugate it


const U_VERB_SUFFIX_TO_I: {[suffix: string]: string} =  {
    'う': 'い',
    'く': 'き',
    'ぐ': 'ぎ',
    'す': 'し',
    'つ': 'ち',
    'ぬ': 'に',
    'ぶ': 'び',
    'む': 'み',
    'る': 'り'
};

const U_VERB_SUFFIX_TO_ANAI: {[suffix: string]: string} = {
    'う': 'わない',
    'く': 'かない',
    'ぐ': 'がない',
    'す': 'さない',
    'つ': 'たない',
    'ぬ': 'なない',
    'ぶ': 'ばない',
    'む': 'まない',
    'る': 'らない'
};

export enum JapaneseVerbType {
    RU_VERB,
    U_VERB,
    IRREGULAR_VERB
}

export interface JapaneseWordEntry {
    // Meaning of the word
    meaning: string;
    // The word with kanji characters
    kanji: string;
    // The word with only hirgana characters
    hiragana: string;
    // The type of the verb (ru-verb or u-verb)
    verbType: JapaneseVerbType;
}


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
// TODO short past affirmative
// TODO short past negative


function endsWith(inputString, suffix: string): boolean {
    return inputString.substr(-1 * suffix.length) === suffix;
}
