interface GoogleItems {
  title: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
}

enum DisplayMode {
  CENTER = "CENTER",
  HEADBAND = "HEADBAND",
}

export { DisplayMode };

export type { GoogleItems };
