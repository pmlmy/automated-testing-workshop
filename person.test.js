const { getFullName } = require("./person");

test('getFullName without first name and last name is handled properly', () => {
    const participant = {};
    const expected = "First name and last name is required!";
    const result = getFullName(participant);
    expect(result).toBe(expected);
});

test('getFullname without lastName but firstName is present returns "Last name is required"', () => {
    const participant = {firstName: "Dorell"}

    const expected = "Last name is required!"

    const result = getFullName(participant)

    expect(result).toBe(expected)
})

test('getFullname without firstName but lastName is present returns "First name is required"', () => {
    const participant = {lastName: "Dorell"}

    const expected = "First name is required!"

    const result = getFullName(participant)

    expect(result).toBe(expected)
})

test("getFullname with proper data returns firstname lastname", () => {
    const participant = {firstName: "Dorell", lastName: "Gwapo"}

    const expected = "Dorell Gwapo"

    const result = getFullName(participant)

    expect(result).toBe(expected)
})