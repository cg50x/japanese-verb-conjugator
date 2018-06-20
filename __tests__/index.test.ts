import {
    getFormalPastAffirmative,
    getFormalPastNegative,
    getFormalPresentAffirmative,
    getFormalPresentNegative,
    JapaneseWordEntry,
    JapaneseVerbType
} from '../index';

interface TestInput {
    input: JapaneseWordEntry,
    output: string
};

describe('getFormalPresentAffirmative', () => {

    test('works with ru verbs', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'to see', kanji: '見る', hiragana: 'みる', verbType: JapaneseVerbType.RU_VERB },
                output: '見ます'
            },
            {
                input: { meaning: 'to eat', kanji: '食べる', hiragana: 'たべる', verbType: JapaneseVerbType.RU_VERB },
                output: '食べます'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getFormalPresentAffirmative(input.input);
            expect(actual).toBe(input.output);
        });
    });

    test('works with u verbs', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'to hear', kanji: '聞く', hiragana: 'きく', verbType: JapaneseVerbType.U_VERB },
                output: '聞きます'
            },
            {
                input: { meaning: 'to swim', kanji: '泳ぐ', hiragana: 'およぐ', verbType: JapaneseVerbType.U_VERB },
                output: '泳ぎます'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getFormalPresentAffirmative(input.input);
            expect(actual).toBe(input.output);
        });
    });

    test('works with irregular verbs', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'to do', kanji: 'する', hiragana: 'する', verbType: JapaneseVerbType.IRREGULAR_VERB },
                output: 'します'
            },
            {
                input: { meaning: 'to come', kanji: '来る', hiragana: 'くる', verbType: JapaneseVerbType.IRREGULAR_VERB },
                output: '来ます'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getFormalPresentAffirmative(input.input);
            expect(actual).toBe(input.output);
        });
    });
});

describe('getFormalPresentNegative', () => {

    test('works with ru verbs', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'to see', kanji: '見る', hiragana: 'みる', verbType: JapaneseVerbType.RU_VERB },
                output: '見ません'
            },
            {
                input: { meaning: 'to eat', kanji: '食べる', hiragana: 'たべる', verbType: JapaneseVerbType.RU_VERB },
                output: '食べません'
            }
        ];

        inputs.forEach((input: TestInput) => {
            const actual = getFormalPresentNegative(input.input);
            expect(actual).toBe(input.output);
        });
    });

    test('works with u verbs', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'to hear', kanji: '聞く', hiragana: 'きく', verbType: JapaneseVerbType.U_VERB },
                output: '聞きません'
            },
            {
                input: { meaning: 'to swim', kanji: '泳ぐ', hiragana: 'およぐ', verbType: JapaneseVerbType.U_VERB },
                output: '泳ぎません'
            }
        ];

        inputs.forEach((input: TestInput) => {
            const actual = getFormalPresentNegative(input.input);
            expect(actual).toBe(input.output);
        });
    });

    test('works with irregular verbs', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'to do', kanji: 'する', hiragana: 'する', verbType: JapaneseVerbType.IRREGULAR_VERB },
                output: 'しません'
            },
            {
                input: { meaning: 'to come', kanji: '来る', hiragana: 'くる', verbType: JapaneseVerbType.IRREGULAR_VERB },
                output: '来ません'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getFormalPresentNegative(input.input);
            expect(actual).toBe(input.output);
        });
    });
});

describe('getFormalPastAffirmative', () => {

    test('works with ru verbs', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'to see', kanji: '見る', hiragana: 'みる', verbType: JapaneseVerbType.RU_VERB },
                output: '見ました'
            },
            {
                input: { meaning: 'to eat', kanji: '食べる', hiragana: 'たべる', verbType: JapaneseVerbType.RU_VERB },
                output: '食べました'
            }
        ];

        inputs.forEach((input: TestInput) => {
            const actual = getFormalPastAffirmative(input.input);
            expect(actual).toBe(input.output);
        });
    });

    test('works with u verbs', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'to hear', kanji: '聞く', hiragana: 'きく', verbType: JapaneseVerbType.U_VERB },
                output: '聞きました'
            },
            {
                input: { meaning: 'to swim', kanji: '泳ぐ', hiragana: 'およぐ', verbType: JapaneseVerbType.U_VERB },
                output: '泳ぎました'
            }
        ];

        inputs.forEach((input: TestInput) => {
            const actual = getFormalPastAffirmative(input.input);
            expect(actual).toBe(input.output);
        });
    });
    
    test('works with irregular verbs', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'to do', kanji: 'する', hiragana: 'する', verbType: JapaneseVerbType.IRREGULAR_VERB },
                output: 'しました'
            },
            {
                input: { meaning: 'to come', kanji: '来る', hiragana: 'くる', verbType: JapaneseVerbType.IRREGULAR_VERB },
                output: '来ました'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getFormalPastAffirmative(input.input);
            expect(actual).toBe(input.output);
        });
    });
});

describe('getFormalPastNegative', () => {

    test('works with ru verbs', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'to see', kanji: '見る', hiragana: 'みる', verbType: JapaneseVerbType.RU_VERB },
                output: '見ませんでした'
            },
            {
                input: { meaning: 'to eat', kanji: '食べる', hiragana: 'たべる', verbType: JapaneseVerbType.RU_VERB },
                output: '食べませんでした'
            }
        ];

        inputs.forEach((input: TestInput) => {
            const actual = getFormalPastNegative(input.input);
            expect(actual).toBe(input.output);
        });
    });

    test('works with u verbs', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'to hear', kanji: '聞く', hiragana: 'きく', verbType: JapaneseVerbType.U_VERB },
                output: '聞きませんでした'
            },
            {
                input: { meaning: 'to swim', kanji: '泳ぐ', hiragana: 'およぐ', verbType: JapaneseVerbType.U_VERB },
                output: '泳ぎませんでした'
            }
        ];

        inputs.forEach((input: TestInput) => {
            const actual = getFormalPastNegative(input.input);
            expect(actual).toBe(input.output);
        });
    });
    
    test('works with irregular verbs', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'to do', kanji: 'する', hiragana: 'する', verbType: JapaneseVerbType.IRREGULAR_VERB },
                output: 'しませんでした'
            },
            {
                input: { meaning: 'to come', kanji: '来る', hiragana: 'くる', verbType: JapaneseVerbType.IRREGULAR_VERB },
                output: '来ませんでした'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getFormalPastNegative(input.input);
            expect(actual).toBe(input.output);
        });
    });
});
