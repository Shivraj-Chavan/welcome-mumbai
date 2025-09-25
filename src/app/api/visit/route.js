import { pool } from "@/lib/db";


export async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM website_visits WHERE id = 1");
    let count = 1;

    if (rows.length) {
      count = rows[0].count + 1;
      await pool.query("UPDATE website_visits SET count = ? WHERE id = 1", [count]);
    } else {
      await pool.query("INSERT INTO website_visits (count) VALUES (1)");
    }

    return new Response(JSON.stringify({ count }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 });
  }
}
