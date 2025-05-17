import db from "../lib/db.js";

const financeData = [
  { name: "DOLAR", value: 32.10, change: +0.18 },
  { name: "EURO", value: 34.56, change: -0.12 },
  { name: "STERLİN", value: 40.01, change: -1.65 },
  { name: "BITCOIN", value: 62671.76, change: +103.18 },
  { name: "ALTIN", value: 2396.58, change: -2.27 },
  { name: "FAİZ", value: 45.90, change: +0.01 }
];

const insert = db.prepare("INSERT INTO finance (name, value, change) VALUES (?, ?, ?)");

financeData.forEach((item) => {
  insert.run(item.name, item.value, item.change);
});

console.log("finance verileri");
