import {
    getFormalPastAffirmative,
    getFormalPastNegative,
    getFormalPresentAffirmative,
    getFormalPresentNegative,
    getTeForm,
    getShortPresentAffirmative,
    getShortPresentNegative,
    getShortPastAffirmative,
    getShortPastNegative,
    JapaneseWordEntry,
    JapaneseVerbType
} from '../verbs';

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

describe('getTeForm', () => {

    test('works with ru verbs', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'to see', kanji: '見る', hiragana: 'みる', verbType: JapaneseVerbType.RU_VERB },
                output: '見て'
            },
            {
                input: { meaning: 'to eat', kanji: '食べる', hiragana: 'たべる', verbType: JapaneseVerbType.RU_VERB },
                output: '食べて'
            }
        ];

        inputs.forEach((input: TestInput) => {
            const actual = getTeForm(input.input);
            expect(actual).toBe(input.output);
        });
    });

    test('works with u verbs', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'to meet', kanji: '会う', hiragana: 'あう', verbType: JapaneseVerbType.U_VERB },
                output: '会って'
            },
            {
                input: { meaning: 'to wait', kanji: '待つ', hiragana: 'まつ', verbType: JapaneseVerbType.U_VERB },
                output: '待って'
            },
            {
                input: { meaning: 'to take', kanji: 'とる', hiragana: 'とる', verbType: JapaneseVerbType.U_VERB },
                output: 'とって'
            },
            {
                input: { meaning: 'to read', kanji: '読む', hiragana: 'よむ', verbType: JapaneseVerbType.U_VERB },
                output: '読んで'
            },
            {
                input: { meaning: 'to play', kanji: '遊ぶ', hiragana: 'あそぶ', verbType: JapaneseVerbType.U_VERB },
                output: '遊んで'
            },
            {
                input: { meaning: 'to die', kanji: '死ぬ', hiragana: 'しぬ', verbType: JapaneseVerbType.U_VERB },
                output: '死んで'
            },
            {
                input: { meaning: 'to write', kanji: '書く', hiragana: 'かく', verbType: JapaneseVerbType.U_VERB },
                output: '書いて'
            },
            {
                input: { meaning: 'to go', kanji: '行く', hiragana: 'いく', verbType: JapaneseVerbType.U_VERB },
                output: '行って'
            },
            {
                input: { meaning: 'to swim', kanji: '泳ぐ', hiragana: 'およぐ', verbType: JapaneseVerbType.U_VERB },
                output: '泳いで'
            },
            {
                input: { meaning: 'to speak', kanji: '話す', hiragana: 'はなす', verbType: JapaneseVerbType.U_VERB },
                output: '話して'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getTeForm(input.input);
            expect(actual).toBe(input.output);
        });
    });

    test('works with irregular verbs', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'to do', kanji: 'する', hiragana: 'する', verbType: JapaneseVerbType.IRREGULAR_VERB },
                output: 'して'
            },
            {
                input: { meaning: 'to come', kanji: '来る', hiragana: 'くる', verbType: JapaneseVerbType.IRREGULAR_VERB },
                output: '来て'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getTeForm(input.input);
            expect(actual).toBe(input.output);
        });
    });
});

describe('getShortPresentAffirmative', () => {

    test('works with ru verbs', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'to see', kanji: '見る', hiragana: 'みる', verbType: JapaneseVerbType.RU_VERB },
                output: '見る'
            },
            {
                input: { meaning: 'to eat', kanji: '食べる', hiragana: 'たべる', verbType: JapaneseVerbType.RU_VERB },
                output: '食べる'
            }
        ];

        inputs.forEach((input: TestInput) => {
            const actual = getShortPresentAffirmative(input.input);
            expect(actual).toBe(input.output);
        });
    });

    test('works with u verbs', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'to hear', kanji: '聞く', hiragana: 'きく', verbType: JapaneseVerbType.U_VERB },
                output: '聞く'
            },
            {
                input: { meaning: 'to swim', kanji: '泳ぐ', hiragana: 'およぐ', verbType: JapaneseVerbType.U_VERB },
                output: '泳ぐ'
            }
        ];

        inputs.forEach((input: TestInput) => {
            const actual = getShortPresentAffirmative(input.input);
            expect(actual).toBe(input.output);
        });
    });
    
    test('works with irregular verbs', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'to do', kanji: 'する', hiragana: 'する', verbType: JapaneseVerbType.IRREGULAR_VERB },
                output: 'する'
            },
            {
                input: { meaning: 'to come', kanji: '来る', hiragana: 'くる', verbType: JapaneseVerbType.IRREGULAR_VERB },
                output: '来る'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getShortPresentAffirmative(input.input);
            expect(actual).toBe(input.output);
        });
    });
});


// short present negative
describe('getShortPresentNegative', () => {

    test('works with ru verbs', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'to see', kanji: '見る', hiragana: 'みる', verbType: JapaneseVerbType.RU_VERB },
                output: '見ない'
            },
            {
                input: { meaning: 'to eat', kanji: '食べる', hiragana: 'たべる', verbType: JapaneseVerbType.RU_VERB },
                output: '食べない'
            }
        ];

        inputs.forEach((input: TestInput) => {
            const actual = getShortPresentNegative(input.input);
            expect(actual).toBe(input.output);
        });
    });

    test('works with u verbs', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'to hear', kanji: '聞く', hiragana: 'きく', verbType: JapaneseVerbType.U_VERB },
                output: '聞かない'
            },
            {
                input: { meaning: 'to swim', kanji: '泳ぐ', hiragana: 'およぐ', verbType: JapaneseVerbType.U_VERB },
                output: '泳がない'
            }
        ];

        inputs.forEach((input: TestInput) => {
            const actual = getShortPresentNegative(input.input);
            expect(actual).toBe(input.output);
        });
    });
    
    test('works with irregular verbs', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'to do', kanji: 'する', hiragana: 'する', verbType: JapaneseVerbType.IRREGULAR_VERB },
                output: 'しない'
            },
            {
                input: { meaning: 'to come', kanji: '来る', hiragana: 'くる', verbType: JapaneseVerbType.IRREGULAR_VERB },
                output: '来ない'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getShortPresentNegative(input.input);
            expect(actual).toBe(input.output);
        });
    });
});


// short past affirmative
describe('getShortPastAffirmative', () => {

    test('works with ru verbs', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'to see', kanji: '見る', hiragana: 'みる', verbType: JapaneseVerbType.RU_VERB },
                output: '見た'
            },
            {
                input: { meaning: 'to eat', kanji: '食べる', hiragana: 'たべる', verbType: JapaneseVerbType.RU_VERB },
                output: '食べた'
            }
        ];

        inputs.forEach((input: TestInput) => {
            const actual = getShortPastAffirmative(input.input);
            expect(actual).toBe(input.output);
        });
    });

    test('works with u verbs', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'to hear', kanji: '聞く', hiragana: 'きく', verbType: JapaneseVerbType.U_VERB },
                output: '聞いた'
            },
            {
                input: { meaning: 'to swim', kanji: '泳ぐ', hiragana: 'およぐ', verbType: JapaneseVerbType.U_VERB },
                output: '泳いだ'
            }
        ];

        inputs.forEach((input: TestInput) => {
            const actual = getShortPastAffirmative(input.input);
            expect(actual).toBe(input.output);
        });
    });
    
    test('works with irregular verbs', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'to do', kanji: 'する', hiragana: 'する', verbType: JapaneseVerbType.IRREGULAR_VERB },
                output: 'した'
            },
            {
                input: { meaning: 'to come', kanji: '来る', hiragana: 'くる', verbType: JapaneseVerbType.IRREGULAR_VERB },
                output: '来た'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getShortPastAffirmative(input.input);
            expect(actual).toBe(input.output);
        });
    });
});

// short past negative
describe('getShortPastNegative', () => {

    test('works with ru verbs', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'to see', kanji: '見る', hiragana: 'みる', verbType: JapaneseVerbType.RU_VERB },
                output: '見なかった'
            },
            {
                input: { meaning: 'to eat', kanji: '食べる', hiragana: 'たべる', verbType: JapaneseVerbType.RU_VERB },
                output: '食べなかった'
            }
        ];

        inputs.forEach((input: TestInput) => {
            const actual = getShortPastNegative(input.input);
            expect(actual).toBe(input.output);
        });
    });

    test('works with u verbs', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'to hear', kanji: '聞く', hiragana: 'きく', verbType: JapaneseVerbType.U_VERB },
                output: '聞かなかった'
            },
            {
                input: { meaning: 'to swim', kanji: '泳ぐ', hiragana: 'およぐ', verbType: JapaneseVerbType.U_VERB },
                output: '泳がなかった'
            }
        ];

        inputs.forEach((input: TestInput) => {
            const actual = getShortPastNegative(input.input);
            expect(actual).toBe(input.output);
        });
    });
    
    test('works with irregular verbs', () => {
        const inputs: TestInput[] = [
            {
                input: { meaning: 'to do', kanji: 'する', hiragana: 'する', verbType: JapaneseVerbType.IRREGULAR_VERB },
                output: 'しなかった'
            },
            {
                input: { meaning: 'to come', kanji: '来る', hiragana: 'くる', verbType: JapaneseVerbType.IRREGULAR_VERB },
                output: '来なかった'
            }
        ];
        inputs.forEach((input: TestInput) => {
            const actual = getShortPastNegative(input.input);
            expect(actual).toBe(input.output);
        });
    });
});