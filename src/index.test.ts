import { config } from "../src/index";

describe("config", () => {
  beforeAll(() => {
    // Set up environment variables for testing
    process.env.VALID_INT = "42";
    process.env.INVALID_INT = "invalid";
    process.env.VALID_DECIMAL = "3.14";
    process.env.INVALID_DECIMAL = "invalid";
    process.env.VALID_BOOL = "true";
    process.env.INVALID_BOOL = "invalid";
    process.env.STRING_VAR = "test";
    process.env.ARRAY_VAR = "item1, item2 , item3";
    process.env.OBJECT_VAR = '{"key": "value"}';
  });

  describe("loadInteger", () => {
    it("should load a valid integer", () => {
      expect(config.loadInteger("VALID_INT")).toBe(42);
    });

    it("should return default value for invalid input", () => {
      expect(config.loadInteger("INVALID_INT", 10)).toBe(10);
    });

    it("should throw error for invalid input with no default value", () => {
      expect(() => config.loadInteger("INVALID_INT")).toThrowError();
    });
  });

  describe("loadDecimal", () => {
    it("should load a valid decimal", () => {
      expect(config.loadDecimal("VALID_DECIMAL")).toBe(3.14);
    });

    it("should return default value for invalid input", () => {
      expect(config.loadDecimal("INVALID_DECIMAL", 0)).toBe(0);
    });

    it("should throw error for invalid input with no default value", () => {
      expect(() => config.loadDecimal("INVALID_DECIMAL")).toThrowError();
    });
  });

  describe("loadBoolean", () => {
    it("should load a valid boolean", () => {
      expect(config.loadBoolean("VALID_BOOL")).toBe(true);
    });

    it("should return default value for invalid input", () => {
      expect(config.loadBoolean("INVALID_BOOL", false)).toBe(false);
    });

    it("should throw error for invalid input with no default value", () => {
      expect(() => config.loadBoolean("INVALID_BOOL")).toThrowError();
    });
  });

  describe("loadString", () => {
    it("should load a valid string", () => {
      expect(config.loadString("STRING_VAR")).toBe("test");
    });

    it("should return default value for undefined input", () => {
      expect(config.loadString("NON_EXISTENT_VAR", "default")).toBe("default");
    });
  });

  describe("loadArray", () => {
    it("should load a valid array", () => {
      expect(config.loadArray("ARRAY_VAR")).toEqual([
        "item1",
        "item2",
        "item3",
      ]);
    });

    it("should return default value for undefined input", () => {
      expect(config.loadArray("NON_EXISTENT_VAR", ["default"])).toEqual([
        "default",
      ]);
    });
  });

  describe("loadObject", () => {
    it("should load a valid object", () => {
      expect(config.loadObject("OBJECT_VAR")).toEqual({ key: "value" });
    });

    it("should return default value for undefined input", () => {
      expect(config.loadObject("NON_EXISTENT_VAR", { key: "default" })).toEqual(
        { key: "default" }
      );
    });

    it("should throw error for invalid JSON input with no default value", () => {
      expect(() => config.loadObject("INVALID_JSON_VAR")).toThrowError();
    });
  });

  afterAll(() => {
    // Clean up environment variables after testing
    delete process.env.VALID_INT;
    delete process.env.INVALID_INT;
    delete process.env.VALID_DECIMAL;
    delete process.env.INVALID_DECIMAL;
    delete process.env.VALID_BOOL;
    delete process.env.INVALID_BOOL;
    delete process.env.STRING_VAR;
    delete process.env.ARRAY_VAR;
    delete process.env.OBJECT_VAR;
  });
});
