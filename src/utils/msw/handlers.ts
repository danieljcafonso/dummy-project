import { rest } from "msw"
import { rooms } from "fixtures/rooms"

export const handlers = [
  rest.post("*/bookRoom.json", (req, res, ctx) => res(ctx.status(200), ctx.json({ success: true }))),
  rest.get("*/rooms.json", (req, res, ctx) => res(ctx.status(200), ctx.json(rooms)))
]
// default requests handlers to use only in tests
export const defaultRequestHandlers = [
  rest.get(`*`, (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
  rest.post(`*`, (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
  rest.put(`*`, (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
  rest.delete(`*`, (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
  rest.patch(`*`, (req, res, ctx) => res(ctx.status(200), ctx.json({})))
]
