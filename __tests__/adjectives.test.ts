import {
    JapaneseWordEntry,
    AdjectiveType,
    getFormalPresentAffirmative,
    getFormalPresentNegative,
    getFormalPastAffirmative,
    getFormalPastNegative,
    getShortPresentAffirmative,
    getShortPresentNegative,
    getShortPastAffirmative,
    getShortPastNegative
 } from '../adjectives';

interface TestInput {
    input: JapaneseWordEntry,
    output: string
};

describe('getFormalPresentAffirmative', () => {

    test('works with na adjectives', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'beautiful', kanji: '綺麗', hiragana: 'きれい', adjectiveType: AdjectiveType.NA },
                output: '綺麗です'
            },
            {
                input: { meaning: 'fine; energetic', kanji: '元気', hiragana: 'げんき', adjectiveType: AdjectiveType.NA },
                output: '元気です'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getFormalPresentAffirmative(input.input);
            expect(actual).toBe(input.output);
        });
    });

    test('works with i adjectives', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'new', kanji: '新しい', hiragana: 'あたらしい', adjectiveType: AdjectiveType.I },
                output: '新しいです'
            },
            {
                input: { meaning: 'large', kanji: '大きい', hiragana: 'おおきい', adjectiveType: AdjectiveType.I },
                output: '大きいです'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getFormalPresentAffirmative(input.input);
            expect(actual).toBe(input.output);
        });
    });
});

describe('getFormalPresentNegative', () => {

    test('works with na adjectives', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'beautiful', kanji: '綺麗', hiragana: 'きれい', adjectiveType: AdjectiveType.NA },
                output: '綺麗じゃないです'
            },
            {
                input: { meaning: 'fine; energetic', kanji: '元気', hiragana: 'げんき', adjectiveType: AdjectiveType.NA },
                output: '元気じゃないです'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getFormalPresentNegative(input.input);
            expect(actual).toBe(input.output);
        });
    });

    test('works with i adjectives', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'new', kanji: '新しい', hiragana: 'あたらしい', adjectiveType: AdjectiveType.I },
                output: '新しくないです'
            },
            {
                input: { meaning: 'large', kanji: '大きい', hiragana: 'おおきい', adjectiveType: AdjectiveType.I },
                output: '大きくないです'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getFormalPresentNegative(input.input);
            expect(actual).toBe(input.output);
        });
    });
});

describe('getFormalPastAffirmative', () => {

    test('works with na adjectives', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'beautiful', kanji: '綺麗', hiragana: 'きれい', adjectiveType: AdjectiveType.NA },
                output: '綺麗でした'
            },
            {
                input: { meaning: 'fine; energetic', kanji: '元気', hiragana: 'げんき', adjectiveType: AdjectiveType.NA },
                output: '元気でした'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getFormalPastAffirmative(input.input);
            expect(actual).toBe(input.output);
        });
    });

    test('works with i adjectives', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'new', kanji: '新しい', hiragana: 'あたらしい', adjectiveType: AdjectiveType.I },
                output: '新しかったです'
            },
            {
                input: { meaning: 'large', kanji: '大きい', hiragana: 'おおきい', adjectiveType: AdjectiveType.I },
                output: '大きかったです'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getFormalPastAffirmative(input.input);
            expect(actual).toBe(input.output);
        });
    });
});

describe('getFormalPastNegative', () => {

    test('works with na adjectives', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'beautiful', kanji: '綺麗', hiragana: 'きれい', adjectiveType: AdjectiveType.NA },
                output: '綺麗じゃなかったです'
            },
            {
                input: { meaning: 'fine; energetic', kanji: '元気', hiragana: 'げんき', adjectiveType: AdjectiveType.NA },
                output: '元気じゃなかったです'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getFormalPastNegative(input.input);
            expect(actual).toBe(input.output);
        });
    });

    test('works with i adjectives', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'new', kanji: '新しい', hiragana: 'あたらしい', adjectiveType: AdjectiveType.I },
                output: '新しくなかったです'
            },
            {
                input: { meaning: 'large', kanji: '大きい', hiragana: 'おおきい', adjectiveType: AdjectiveType.I },
                output: '大きくなかったです'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getFormalPastNegative(input.input);
            expect(actual).toBe(input.output);
        });
    });
});

describe('getShortPresentAffirmative', () => {

    test('works with na adjectives', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'beautiful', kanji: '綺麗', hiragana: 'きれい', adjectiveType: AdjectiveType.NA },
                output: '綺麗だ'
            },
            {
                input: { meaning: 'fine; energetic', kanji: '元気', hiragana: 'げんき', adjectiveType: AdjectiveType.NA },
                output: '元気だ'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getShortPresentAffirmative(input.input);
            expect(actual).toBe(input.output);
        });
    });

    test('works with i adjectives', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'new', kanji: '新しい', hiragana: 'あたらしい', adjectiveType: AdjectiveType.I },
                output: '新しい'
            },
            {
                input: { meaning: 'large', kanji: '大きい', hiragana: 'おおきい', adjectiveType: AdjectiveType.I },
                output: '大きい'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getShortPresentAffirmative(input.input);
            expect(actual).toBe(input.output);
        });
    });
});

describe('getShortPresentNegative', () => {

    test('works with na adjectives', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'beautiful', kanji: '綺麗', hiragana: 'きれい', adjectiveType: AdjectiveType.NA },
                output: '綺麗じゃない'
            },
            {
                input: { meaning: 'fine; energetic', kanji: '元気', hiragana: 'げんき', adjectiveType: AdjectiveType.NA },
                output: '元気じゃない'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getShortPresentNegative(input.input);
            expect(actual).toBe(input.output);
        });
    });

    test('works with i adjectives', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'new', kanji: '新しい', hiragana: 'あたらしい', adjectiveType: AdjectiveType.I },
                output: '新しくない'
            },
            {
                input: { meaning: 'large', kanji: '大きい', hiragana: 'おおきい', adjectiveType: AdjectiveType.I },
                output: '大きくない'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getShortPresentNegative(input.input);
            expect(actual).toBe(input.output);
        });
    });
});

describe('getShortPastAffirmative', () => {

    test('works with na adjectives', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'beautiful', kanji: '綺麗', hiragana: 'きれい', adjectiveType: AdjectiveType.NA },
                output: '綺麗だった'
            },
            {
                input: { meaning: 'fine; energetic', kanji: '元気', hiragana: 'げんき', adjectiveType: AdjectiveType.NA },
                output: '元気だった'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getShortPastAffirmative(input.input);
            expect(actual).toBe(input.output);
        });
    });

    test('works with i adjectives', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'new', kanji: '新しい', hiragana: 'あたらしい', adjectiveType: AdjectiveType.I },
                output: '新しかった'
            },
            {
                input: { meaning: 'large', kanji: '大きい', hiragana: 'おおきい', adjectiveType: AdjectiveType.I },
                output: '大きかった'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getShortPastAffirmative(input.input);
            expect(actual).toBe(input.output);
        });
    });
});

describe('getShortPastNegative', () => {

    test('works with na adjectives', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'beautiful', kanji: '綺麗', hiragana: 'きれい', adjectiveType: AdjectiveType.NA },
                output: '綺麗じゃなかった'
            },
            {
                input: { meaning: 'fine; energetic', kanji: '元気', hiragana: 'げんき', adjectiveType: AdjectiveType.NA },
                output: '元気じゃなかった'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getShortPastNegative(input.input);
            expect(actual).toBe(input.output);
        });
    });

    test('works with i adjectives', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'new', kanji: '新しい', hiragana: 'あたらしい', adjectiveType: AdjectiveType.I },
                output: '新しくなかった'
            },
            {
                input: { meaning: 'large', kanji: '大きい', hiragana: 'おおきい', adjectiveType: AdjectiveType.I },
                output: '大きくなかった'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getShortPastNegative(input.input);
            expect(actual).toBe(input.output);
        });
    });
});
