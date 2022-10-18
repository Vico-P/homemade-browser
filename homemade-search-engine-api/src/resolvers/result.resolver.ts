import { GoogleItems } from "../types/google.types";

const resolvers = {
  Result: {
    title: ({ title }: GoogleItems) => title,
    link: ({ link }: GoogleItems) => link,
    displayLink: ({ displayLink }: GoogleItems) => displayLink,
    snippet: ({ snippet }: GoogleItems) => snippet,
    htmlSnippet: ({ htmlSnippet }: GoogleItems) => htmlSnippet,
  },
};

export { resolvers };
