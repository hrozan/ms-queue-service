import { createMSQSServer } from "./server"

createMSQSServer(5000).then(() => {
  console.log("Connected ...")
})
