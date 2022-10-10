import fetch from "node-fetch";
import { Safe, SearchType } from "../types/google.types";
/* 
    cx -> Search Engine ID
    q -> Text to query
    key -> API Key
*/
const searchTextOnGoogle: (options: {
  q: string;
  key: string;
  cx: string;
  searchType: SearchType;
}) => Promise<any> = async (requestValue) => {
  const { key, cx, q, searchType } = requestValue;
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?${new URLSearchParams({
      key,
      cx,
      q,
      searchType,
      safe: Safe.OFF,
    }).toString()}`,
    {
      method: "GET",
    }
  ).then((value: any) => value.json());
  return response;
};

export default searchTextOnGoogle;
