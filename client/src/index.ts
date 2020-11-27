import { createMSQSClient } from "./client"

createMSQSClient().then(() => {
  console.log("client running")
})
