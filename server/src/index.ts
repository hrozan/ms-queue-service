import Debug from "debug"
import { createMSQSServer } from "./server"

const debug = Debug("msqs:index")

const port = parseInt(process.env.PORT || "2307")

createMSQSServer({ port }).then(() => {
  debug(`🚀 started on ws://localhost:${port}`)
})
