declare global {
  interface Window {
    flutter_inappwebview?: {
      callHandler: (name: string, data?: unknown) => void;
    };
  }
}

export { };
