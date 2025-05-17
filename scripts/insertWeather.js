import db from "../lib/db.js";

const weatherData = [
  { day: "Pazartesi", icon: "☀️", temp: "18°C" },
  { day: "Salı", icon: "⛅", temp: "16°C" },
  { day: "Çarşamba", icon: "🌧️", temp: "14°C" },
  { day: "Perşembe", icon: "🌦️", temp: "17°C" },
  { day: "Cuma", icon: "🌤️", temp: "19°C" }
];

const insert = db.prepare(`
  INSERT INTO weather (day, icon, temp) VALUES (?, ?, ?)
`);

weatherData.forEach((item) => {
  insert.run(item.day, item.icon, item.temp);
});

console.log("weather");
