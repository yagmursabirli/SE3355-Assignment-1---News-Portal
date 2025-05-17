import db from "../lib/db.js";

const newsList = [
  { title: "Kilolu Avcısı Diyetisyen",
    image: "https://r.resimlink.com/d5e8zYEK6.png",
    link: "https://example.com"
  },
  {
    title: "Nakit Para Krizi",
    image: "https://r.resimlink.com/joGuHlmhQDBN.png",
    link: "https://example.com"
  },
  {
    title: "Ev Fiyatları",
    image: "https://r.resimlink.com/-XmOJtx_cCH.png",
    link: "https://example.com"
  },
  {
    title: "Türkiye Kupası",
    image: "https://r.resimlink.com/87i93.png",
    link: "https://example.com"
  },
  {
    title: "Maçta Olay",
    image: "https://r.resimlink.com/Lul297O3f.png",
    link: "https://example.com"
  },
  {
    title:"Osimhen'den Mesaj",
    image: "https://r.resimlink.com/WNjQd4nS.png",
    link: "https://example.com"
  },
  {
    title: "Meclis",
    image: "https://r.resimlink.com/IifNSa3Xs9c.png",
    link: "https://example.com"
  },
  {
    title: "Trump F-55'i tanıttı",
    image: "https://r.resimlink.com/cC4k_a.png",
    link: "https://example.com"
  },
  {
    title: "VAR Sistemi",
    image: "https://r.resimlink.com/60nJuBQ7VxX.png",
    link: "https://example.com"
  },
  {
    title:"Yangın",
    image: "https://r.resimlink.com/4eEiz.png",
    link: "https://example.com"
  }
];

const insert = db.prepare(`
  INSERT INTO news (title, image, link) VALUES (?, ?, ?)
`);

for (const item of newsList) {
  insert.run(item.title, item.image, item.link);
}

console.log("Slider haberleri");
