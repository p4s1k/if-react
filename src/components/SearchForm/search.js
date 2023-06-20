import { data } from "../../data/data";

export const search = (searchQuery) => {
  const founded = [];

  data.forEach((destination) => {
    for (let property in destination) {
      if (property !== "id" && property !== "imageUrl") {
        if (
          destination[property]
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        ) {
          founded.push(destination);
          break;
        }
      }
    }
  });

  return founded;
};
