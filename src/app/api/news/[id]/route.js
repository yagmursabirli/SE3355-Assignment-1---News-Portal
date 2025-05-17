export async function GET(request, { params }) {
  const { id } = params;

  const news = [
    {
      id: 1,
      image: "https://r.resimlink.com/d5e8zYEK6.png",
    },
    {
      id: 2,
      image: "https://r.resimlink.com/joGuHlmhQDBN.png",
    },
    {
      id: 3,
      image: "https://r.resimlink.com/-XmOJtx_cCH.png",
    },
    {
      id: 4,
      image: "https://r.resimlink.com/87i93.png",
    },
    {
      id: 5,
      image: "https://r.resimlink.com/Lul297O3f.png",
    },
    {
      id: 6,
      image: "https://r.resimlink.com/WNjQd4nS.png",
    },
    {
      id: 7,
      image: "https://r.resimlink.com/IifNSa3Xs9c.png",
    },
    {
      id: 8,
      image: "https://r.resimlink.com/cC4k_a.png",
    },
    {
      id: 9,
      image: "https://r.resimlink.com/60nJuBQ7VxX.png",
    },
    {
      id: 10,
      image: "https://r.resimlink.com/4eEiz.png",
    },
  ];

  const selected = news.find((n) => n.id === parseInt(id));

  if (!selected) {
    return new Response("Haber bulunamadı", { status: 404 });
  }

  return Response.json(selected);
}
