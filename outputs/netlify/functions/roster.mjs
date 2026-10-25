const ROSTER_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRyAUxpMKG8gLJvVmjBLmWRagfbtII1YeFac13Wr0XLqeY-uWGVvVy7maG0bq8mtaqmibmMDU_YwXHJ/pub?gid=406562107&single=true&output=csv";

export default async () => {
  try {
    const response = await fetch(ROSTER_CSV_URL, { headers: { accept: "text/csv,text/plain;q=0.9,*/*;q=0.8" } });
    if (!response.ok) return new Response(JSON.stringify({ error: `Google Sheets ตอบกลับ ${response.status}` }), { status: 502, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } });
    const csv = await response.text();
    if (!csv.trim() || csv.trimStart().startsWith("<!DOCTYPE html") || csv.trimStart().startsWith("<html")) return new Response(JSON.stringify({ error: "ลิงก์ชีตไม่ได้ส่งข้อมูล CSV กลับมา กรุณาตรวจการเผยแพร่ชีต" }), { status: 502, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } });
    return new Response(csv, { status: 200, headers: { "content-type": "text/csv; charset=utf-8", "cache-control": "public, max-age=300, s-maxage=300", "access-control-allow-origin": "*" } });
  } catch (error) {
    return new Response(JSON.stringify({ error: `ดึงรายชื่อจาก Google Sheets ไม่สำเร็จ: ${error.message}` }), { status: 502, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } });
  }
};
