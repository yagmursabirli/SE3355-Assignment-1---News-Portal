export default async function NewsDetailPage({ params }) {
  const res = await fetch(`http://localhost:3000/api/news/${params.id}`);
  const news = await res.json();

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Haber #{news.id}</h1>
      <img
        src={news.image}
        alt={`Haber ${news.id}`}
        style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
      />
    </div>
  );
}
