const ENABLED = process.env.DISCORD_WEBHOOK_ENABLED === "true";
const URL = process.env.DISCORD_WEBHOOK_URL!;
function embedColor(sev: string) {
  switch (sev) {
    case "ERROR":
      return 15158332;
    case "WARN":
      return 15844367;
    case "SECURITY":
      return 10038562;
    default:
      return 3066993;
  }
}
export async function sendDiscord(event: {
  event: string;
  severity?: "INFO" | "WARN" | "ERROR" | "SECURITY";
  message?: string;
  fields?: Record<string, string | number | undefined | null>;
}) {
  if (!ENABLED || !URL) return { ok: true, skipped: true };
  const sev = event.severity || "INFO";
  const payload = {
    username: "KYC Bot",
    embeds: [
      {
        title: event.event,
        description: event.message || "",
        color: embedColor(sev),
        timestamp: new Date().toISOString(),
        fields: Object.entries(event.fields || {})
          .filter(([, v]) => v !== undefined && v !== null && v !== "")
          .map(([name, value]) => ({
            name,
            value: String(value),
            inline: true,
          })),
      },
    ],
  };
  const res = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return { ok: res.ok, status: res.status, body: await res.text() };
}
