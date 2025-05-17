import db from "../../../../lib/db.js";

export async function GET() {
  const data = db.prepare("SELECT * FROM smallnews").all();
  return Response.json(data);
}
