import { setupServer } from "msw/node"
import { handlers, defaultRequestHandlers } from "./handlers"

export const server = setupServer(...handlers, ...defaultRequestHandlers)
