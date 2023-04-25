import { useEffect, useState } from "react";
import { Photo } from "../pages/Album";

export const useFetch = (url: string) => {
  const [data, setData] = useState<Photo | Photo[]>();

  const dataFetch = async () => {
    const json = await (await fetch(url)).json();
    setData(json);
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return data;
};
