import db from "../../../../lib/db.js";

export async function GET() {
  const data = db.prepare("SELECT * FROM weather LIMIT 5").all();
  return Response.json(data);
}
