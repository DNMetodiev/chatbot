import { client, assistant } from "../utils/openai"
import { getLatestMessages } from "../utils/get-message"

export default defineEventHandler(async (event) => {
  const threadID = getCookie(event, "thread-id");
  // const runID = getCookie(event, "run-id");

  if (!threadID) {
    return;
  }

  const queryParams = getQuery(event);

  client.beta.threads.messages.create(threadID, {
    role: "user",
    content: queryParams.message?.toString() ?? "",
  });


  const run = await client.beta.threads.runs.create(threadID, {
    assistant_id: assistant,
    additional_instructions: `The customer's name is ${queryParams.customerName}`,
  });

  return await getLatestMessages(threadID, run.id);
})