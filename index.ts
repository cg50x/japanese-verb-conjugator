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

export enum JapaneseVerbType {
    RU_VERB,
    U_VERB
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

// verb stem
export function getVerbStem(wordEntry: JapaneseWordEntry): string {
    const word = wordEntry.kanji;
    // ru-verb
    if (wordEntry.verbType === JapaneseVerbType.RU_VERB) {
        return word.substring(0, word.length - 1);
    }

    // u-verb
    // Get the last character and find its 'I' character
    const iChar = U_VERB_SUFFIX_TO_I[wordEntry.kanji.charAt(wordEntry.kanji.length - 1)];
    if (!iChar) {
        throw new Error(`I character not found for verb: ${wordEntry.kanji}`);
    }
    return word.substring(0, word.length - 1) + iChar;
}


// TODO formal past affirmative
// TODO formal past negative
// TODO te-form
// TODO short present affirmative
// TODO short present negative
// TODO short past affirmative
// TODO short past negative
