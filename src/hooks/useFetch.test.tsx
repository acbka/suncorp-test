import { renderHook, waitFor } from "@testing-library/react";
import mockData from "../mocks/photo.mock.json";
import { useFetch } from "./useFetch";

test("fetches data from the API and returns it", async () => {
  const { result } = renderHook(() =>
    useFetch("https://jsonplaceholder.typicode.com/photos/1")
  );

  expect(result.current).toBeUndefined();

  await waitFor(() => {
    expect(result.current).toEqual(mockData);
  });
});
