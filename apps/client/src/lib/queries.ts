import axios from "axios";

export const getProduct = async (site: string, query: string) => {
  const { data } = await axios({
    url: `http://localhost:8080/${site}`,
    method: "POST",
    data: {
      query,
    },
  });
  return data;
};
