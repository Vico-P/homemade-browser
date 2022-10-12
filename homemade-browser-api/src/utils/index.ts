import fetch from "node-fetch";
import { Safe, SearchType } from "../types/google.types";
/* 
    cx -> Search Engine ID
    q -> Text to query
    key -> API Key
    start -> number at which we want to start to retrieve result
*/
const searchTextOnGoogle: (options: {
  q: string;
  key: string;
  cx: string;
  searchType: SearchType;
  start: number;
}) => Promise<any> = async (requestValue) => {
  const { key, cx, q, searchType, start } = requestValue;
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?${new URLSearchParams({
      key,
      cx,
      q,
      searchType,
      safe: Safe.OFF,
      start: start.toString(),
    }).toString()}`,
    {
      method: "GET",
    }
  ).then((value: any) => value.json());
  return response;
};

export default searchTextOnGoogle;
