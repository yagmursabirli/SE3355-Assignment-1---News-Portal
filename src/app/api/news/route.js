export const runtime = "nodejs";
import db from "../../../../lib/db.js";


export async function GET() {
  const news = db.prepare("SELECT * FROM news").all();
  return Response.json(news);
}
