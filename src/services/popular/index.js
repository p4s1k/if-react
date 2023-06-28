import { popularUrl } from "../constants";

export const getPopularHotels = async () => {
  const response = await fetch(popularUrl);

  return await response.json();
};
