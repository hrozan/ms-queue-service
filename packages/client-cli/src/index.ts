import { createMSQSClient } from "./client"

const main = async () => {
  const client = await createMSQSClient()
  client.sendMessage({ message: "hello" })
  client.sendMessage({ message: "hello" })
  client.sendMessage({ message: "hello" })

  const payload = await client.consume()

  console.log(payload)
}

main().catch(e => console.log(e))
