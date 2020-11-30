import { createMSQSClient } from "./client"

createMSQSClient().then((client) => {
  client.sendMessage({ message: "hello" })
})
