export const removeInvalidChar = (text: string) => {
    const match = text.matchAll(/[^\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]+/gu);
    while (true) {
        const { value, done } = match.next();
        if (done) break;
        console.log("[*] Invalid char: 'value[0]'")
        text = text.replace(value[0], "");
    }
    return text;
};
