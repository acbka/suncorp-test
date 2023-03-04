import { rest } from "msw";
import albumMock from "./album.mock.json";

const albumHandler = rest.get(
  "http://jsonplaceholder.typicode.com/photos",
  (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(albumMock));
  }
);

const photoHandler = rest.get(
  "http://jsonplaceholder.typicode.com/photos/id",
  (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(albumMock));
  }
);

export const handlers = [albumHandler, photoHandler];
