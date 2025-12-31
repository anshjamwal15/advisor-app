// Minimal React type shims to satisfy TypeScript without external @types packages.
declare module "react/jsx-runtime" {
  export const Fragment: any;
  export function jsx(type: any, props: any, key?: any): any;
  export function jsxs(type: any, props: any, key?: any): any;
}

declare module "react" {
  export type ReactNode = any;
  export function useState<T = any>(initialState: T | (() => T)): [T, (value: T) => void];
  export function useEffect(effect: (...args: any[]) => any, deps?: any[]): void;
  export function useMemo<T>(factory: () => T, deps: any[]): T;
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: any[]): T;
  export const createElement: any;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
