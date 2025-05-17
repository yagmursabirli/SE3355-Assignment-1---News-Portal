import db from "../../../../lib/db.js";

export async function GET() {
  const finance = db.prepare("SELECT * FROM finance").all();

  const formatted = finance.map(item => ({
    name: item.name,
    value: item.value.toFixed(2),
    change: item.change.toFixed(2),
    color: item.change >= 0 ? "green" : "red"
  }));

  return Response.json(formatted);
}
