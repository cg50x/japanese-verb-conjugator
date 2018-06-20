import {
    getFormalPresentAffirmative,
    getFormalPresentNegative,
    JapaneseWordEntry,
    JapaneseVerbType
} from '../index';

interface TestInput {
    input: JapaneseWordEntry,
    output: string
};

const testInputs: TestInput[] = [
    {
        input: { meaning: 'to see', kanji: '見る', hiragana: 'みる', verbType: JapaneseVerbType.RU_VERB },
        output: '見ます'
    },
    {
        input: { meaning: 'to hear', kanji: '聞く', hiragana: 'きく', verbType: JapaneseVerbType.U_VERB },
        output: '聞きます'
    },
    {
        input: { meaning: 'to eat', kanji: '食べる', hiragana: 'たべる', verbType: JapaneseVerbType.RU_VERB },
        output: '食べます'
    },
    {
        input: { meaning: 'to swim', kanji: '泳ぐ', hiragana: 'およぐ', verbType: JapaneseVerbType.U_VERB },
        output: '泳ぎます'
    }
];

test('getFormalPresentAffirmative', () => {
    testInputs.forEach((testInput: TestInput) => {
        const actual = getFormalPresentAffirmative(testInput.input);
        expect(actual).toBe(testInput.output);
    });
});

const testInputs2: TestInput[] = [
    {
        input: { meaning: 'to see', kanji: '見る', hiragana: 'みる', verbType: JapaneseVerbType.RU_VERB },
        output: '見ません'
    },
    {
        input: { meaning: 'to hear', kanji: '聞く', hiragana: 'きく', verbType: JapaneseVerbType.U_VERB },
        output: '聞きません'
    },
    {
        input: { meaning: 'to eat', kanji: '食べる', hiragana: 'たべる', verbType: JapaneseVerbType.RU_VERB },
        output: '食べません'
    },
    {
        input: { meaning: 'to swim', kanji: '泳ぐ', hiragana: 'およぐ', verbType: JapaneseVerbType.U_VERB },
        output: '泳ぎません'
    }
];

test('getFormalPresentNegative', () => {
    testInputs2.forEach((testInput: TestInput) => {
        const actual = getFormalPresentNegative(testInput.input);
        expect(actual).toBe(testInput.output);
    });
});
