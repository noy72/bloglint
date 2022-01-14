test('各かっこに "|" が含まれている場合', () => {
    expect([..."red|green|blue".matchAll(/red|blue/gu)].map(m => m[0])).toEqual(
        ["red", "blue"]
    );
    expect(
        [..."red|green|blue".matchAll(/[red|blue]/gu)].map(m => m[0]).join("")
    ).toEqual("red|ree|blue");
});
