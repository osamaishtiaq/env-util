declare module "strongly-env" {
  export type LoadFunction<T> = (
    envVariable: string | undefined,
    defaultValue?: T
  ) => T;

  export const loadInteger: LoadFunction<number>;
  export const loadDecimal: LoadFunction<number>;
  export const loadBoolean: LoadFunction<boolean>;
  export const loadString: LoadFunction<string>;
  export const loadArray: LoadFunction<string[]>;
  export const loadObject: LoadFunction<any>;

  export const config: {
    loadInteger: LoadFunction<number>;
    loadDecimal: LoadFunction<number>;
    loadBoolean: LoadFunction<boolean>;
    loadString: LoadFunction<string>;
    loadArray: LoadFunction<string[]>;
    loadObject: LoadFunction<any>;
  };
}
