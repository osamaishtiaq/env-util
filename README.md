# strongly-env

A utility to elegantly read environment variables as JavaScript/TypeScript types. Simple, lightweight and performant wih no external dependencies. Also provides option to revert to default value in case env variable is undefined.    

## Installation

Install the package using npm or yarn:

```bash
npm install strongly-env
# or
yarn add strongly-env
```

### Usage

In your code, you can import the utility functions from the package and use them to read environment variables. Please note that this package is designed for server-side environments and relies on process.env. It might not work as expected in browser-based environments.

### Import and Usage

```typescript
import { config } from "strongly-env";

// Load an integer environment variable with a default value
const maxThreshold = config.loadInteger("MAX_THRESHOLD", 5);

// Load a decimal environment variable with a default value
const taxRate = config.loadDecimal("TAX_RATE", 0.08);

// Load a boolean environment variable with a default value
const debugMode = config.loadBoolean("DEBUG_MODE", false);

// Load a string environment variable with a default value
const dbName = config.loadString("DATABASE_NAME", "mydb");

// Load an array of strings from an environment variable
const allowedOrigins = config.loadArray("ALLOWED_ORIGINS", []);

// Load a JSON object from an environment variable
const appConfig = config.loadObject("APP_CONFIG", {
  name: "MyApp",
  version: "1.0.0",
});
```

### Utility Functions

`loadInteger(envVariable: string, defaultValue?: number): number`  
Load an integer environment variable with an optional default value.

`loadDecimal(envVariable: string, defaultValue?: number): number`  
Load a decimal environment variable with an optional default value.

`loadBoolean(envVariable: string, defaultValue?: boolean): boolean`  
Load a boolean environment variable with an optional default value.

`loadString(envVariable: string, defaultValue?: string): string`  
Load a string environment variable with an optional default value.

`loadArray(envVariable: string, defaultValue?: string[]): string[]`  
Load an array of strings from an environment variable with an optional default value.

`loadObject(envVariable: string, defaultValue: any): any`  
Load a JSON object from an environment variable with an optional default value.

### Warning

This package is intended for server-side environments that support process.env, such as Node.js applications. It may not work as expected in browser-based environments due to its reliance on server-specific features. Please ensure that you only use this package in environments where process.env is available.

If you plan to use this package in a browser-based environment, you might need to consider alternative approaches or modifications to make it compatible.
