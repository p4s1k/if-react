import { apiUrl } from "../constants";

export const search = async (searchRequest) => {
  apiUrl.searchParams.set("search", searchRequest);

  const searchResponse = await fetch(apiUrl);
  return await searchResponse.json();
};
