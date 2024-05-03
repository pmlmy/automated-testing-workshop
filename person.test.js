const { getFullName } = require("./person");

test('getFullName without first name and last name is handled properly', () => {
    const participant = {};
    const expected = "First name and last name is required!";
    const result = getFullName(participant);
    expect(result).toBe(expected);
});