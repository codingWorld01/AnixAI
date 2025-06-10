import cron from "node-cron";
import { refreshWebsiteContent } from "../lib/fetchWebsiteContent";

cron.schedule("0 */6 * * *", async () => {
  console.log("Refreshing website content cache...");
  await refreshWebsiteContent();
});
