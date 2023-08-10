type LoadFunction<T> = (envVariable: string, defaultValue?: T) => T;

const validateBooleanValue = (input: string): boolean => {
  const lowerInput = input.toLowerCase();
  if (lowerInput === "true" || lowerInput === "1") {
    return true;
  } else if (lowerInput === "false" || lowerInput === "0") {
    return false;
  }
  throw new Error(`Invalid boolean value: ${input}`);
};

const loadInteger: LoadFunction<number> = (envVariable, defaultValue) => {
  const input = process.env[envVariable];
  const parsedValue = parseInt(input || "", 10);
  if (isNaN(parsedValue)) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Invalid integer for ${envVariable}: ${input}`);
  }
  return parsedValue;
};

const loadDecimal: LoadFunction<number> = (envVariable, defaultValue) => {
  const input = process.env[envVariable];
  const parsedValue = parseFloat(input || "");
  if (isNaN(parsedValue)) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Invalid decimal number for ${envVariable}: ${input}`);
  }
  return parsedValue;
};

const loadBoolean: LoadFunction<boolean> = (envVariable, defaultValue) => {
  const input = process.env[envVariable];
  if (input !== undefined) {
    try {
      return validateBooleanValue(input);
    } catch (error) {
      if (defaultValue !== undefined) {
        return defaultValue;
      }
      throw new Error(`Invalid boolean value for ${envVariable}: ${input}`);
    }
  }
  return defaultValue !== undefined ? defaultValue : false;
};

const loadString: LoadFunction<string> = (envVariable, defaultValue) => {
  const input = process.env[envVariable];
  return input !== undefined
    ? input
    : defaultValue !== undefined
    ? defaultValue
    : "";
};

const loadArray: LoadFunction<string[]> = (envVariable, defaultValue) => {
  const input = process.env[envVariable];
  if (input !== undefined) {
    return input.split(",").map((item) => item.trim());
  }
  return defaultValue !== undefined ? defaultValue : [];
};

const loadObject: LoadFunction<any> = (envVariable, defaultValue) => {
  const input = process.env[envVariable];
  if (input !== undefined) {
    try {
      return JSON.parse(input);
    } catch (error) {
      throw new Error(`Invalid JSON value for ${envVariable}: ${input}`);
    }
  } else if (defaultValue === undefined) {
    throw new Error(`Missing value for ${envVariable}`);
  }
  return defaultValue;
};

// Export utility functions
export const config = {
  loadInteger,
  loadDecimal,
  loadBoolean,
  loadString,
  loadArray,
  loadObject,
};
