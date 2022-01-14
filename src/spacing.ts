const regexPatterns = [
    /[\p{sc=Hiragana}\p{sc=Katakana}\p{sc=Han}\n\r][a-zA-Z]+?[\p{sc=Hiragana}\p{sc=Katakana}\p{sc=Han}]/gu,
    /[\p{sc=Hiragana}\p{sc=Katakana}\p{sc=Han}\n\r]`.+?`[\p{sc=Hiragana}\p{sc=Katakana}\p{sc=Han}]/gu,
    /[\p{sc=Hiragana}\p{sc=Katakana}\p{sc=Han}\n\r] [a-zA-Z]+?[\p{sc=Hiragana}\p{sc=Katakana}\p{sc=Han}]/gu,
    /[\p{sc=Hiragana}\p{sc=Katakana}\p{sc=Han}\n\r] `.+?`[\p{sc=Hiragana}\p{sc=Katakana}\p{sc=Han}]/gu,
    /[\p{sc=Hiragana}\p{sc=Katakana}\p{sc=Han}\n\r][a-zA-Z]+? [\p{sc=Hiragana}\p{sc=Katakana}\p{sc=Han}]/gu,
    /[\p{sc=Hiragana}\p{sc=Katakana}\p{sc=Han}\n\r]`.+?` [\p{sc=Hiragana}\p{sc=Katakana}\p{sc=Han}]/gu,
];

export const addSpace = (str: string) => {
    let replaced = str;

    regexPatterns.forEach(pattern => {
        const match = str.matchAll(pattern);
        while (true) {
            const ignorePatterns: RegExp[] = [/f値/gu];

            const { value, done } = match.next();
            if (done) break;

            const text: string = value[0];
            if (ignorePatterns.some(pattern => pattern.test(text))) {
                console.log(`[!] Ignore: "${text}"`);
                continue;
            }

            const preSpace = ["\n", "\r"].includes(text[0]) ? "" : " ";
            const to = `${text[0]}${preSpace}${text.slice(1, -1).trim()} ${text[text.length - 1]
                }`;
            console.log(`[*] Replace:\n  "${text}"\n  "${to}"`);
            replaced = replaced.replace(text, to);
        }
    });
    return replaced;
};
