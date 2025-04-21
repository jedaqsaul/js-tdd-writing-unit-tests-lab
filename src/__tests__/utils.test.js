// src/__tests__/utils.test.js
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for palindromes", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("mom")).toBe(true);
  });

  it("returns false for non-palindromes", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("returns true for palindromes with mixed case", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  it("returns false for empty strings", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error for non-alphabetic characters", () => {
    expect(() => isPalindrome("hello123")).toThrow(
      "Input must contain only alphabetic characters"
    );
  });

  it("throws an error if the input is not a string", () => {
    expect(() => isPalindrome(12345)).toThrow("Input must be a string");
  });
});
