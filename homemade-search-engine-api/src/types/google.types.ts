enum SearchType {
  SEARCH_TYPE_UNDEFINED = "SEARCH_TYPE_UNDEFINED",
  IMAGE = "IMAGE",
}

enum Safe {
  SAFE_UNDEFINED = "SAFE_UNDEFINED",
  ACTIVE = "ACTIVE",
  OFF = "OFF",
}

interface GoogleItems {
  title: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
}

export { SearchType, Safe, GoogleItems };
