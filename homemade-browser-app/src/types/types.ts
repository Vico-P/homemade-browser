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

enum SearchType {
  SEARCH_TYPE_UNDEFINED = "SEARCH_TYPE_UNDEFINED",
  IMAGE = "IMAGE",
}

export { DisplayMode, SearchType };

export type { GoogleItems };
