import db from "../lib/db.js";

const smallNewsData = [
  {
    title: "Motokuryelikte devrim! Kimse bu kuralları beklemiyordu!",
    image: "https://r.resimlink.com/ft0yJm.png",
    link: "https://example.com"
  }
];
const insert = db.prepare("INSERT INTO smallnews (title, image, link) VALUES (?, ?, ?)");

smallNewsData.forEach((item) => {
  insert.run(item.title, item.image, item.link);
});

console.log("kucuk haber");