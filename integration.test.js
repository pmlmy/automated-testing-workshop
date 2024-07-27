// integration.test.jscl
const { introduce } = require("./integration");

test('introduce handles missing person', () => {
    const result = introduce();
    expect(result).toBe('Hello, undefined. I am undefined years old.');
});

test('description', () => {
    const person = { name: '', age: '' }
    const expected = "Hello, . I am  years old.";
    const result = introduce(person);
    expect(result).toBe(expected);
});