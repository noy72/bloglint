import { addSpace } from "../src/spacing";

describe("addSpace", () => {
    test("英語の前後に空白を入れる", () => {
        const text = addSpace("あいaaaaあいbbあい");
        expect(text).toBe("あい aaaa あい bb あい");
    });

    test("インラインのコードブロックの空白を入れる", () => {
        const text = addSpace("あい`aaaa`あい`bb`あい");
        expect(text).toBe("あい `aaaa` あい `bb` あい");
    });

    test("空白がすでに入っている場合は何もしない", () => {
        let text = addSpace("あい aaaa あい bb あい");
        expect(text).toBe("あい aaaa あい bb あい");

        text = addSpace("あい `aaaa` あい `bb` あい");
        expect(text).toBe("あい `aaaa` あい `bb` あい");
    });

    test("片側だけスペースが空いているときは両方空ける", () => {
        let text = addSpace("あい `aaaa`あい bbあい");
        expect(text).toBe("あい `aaaa` あい bb あい");

        text = addSpace("あい`aaaa` あいbb あい");
        expect(text).toBe("あい `aaaa` あい bb あい");
    });

    test("文頭に英単語があり文末に空白がない場合", () => {
        expect(addSpace("\naaああ")).toBe("\naa ああ");
        expect(addSpace("\n`aa`ああ")).toBe("\n`aa` ああ");
    });
});

describe("patterns", () => {
    test("|title を", () => {
        expect(addSpace("|title を")).toBe("|title を");
    });
});
