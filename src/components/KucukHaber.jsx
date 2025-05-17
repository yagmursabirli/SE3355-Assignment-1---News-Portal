"use client";
import React, { useEffect, useState } from "react";
import "./kucukHaber.css";

export default function SmallNews() {
  const [haberler, setHaberler] = useState([]);

  useEffect(() => {
    fetch("/api/kucukhaber")
      .then((res) => res.json())
      .then((data) => setHaberler(data));
  }, []);

  return (
    <div className="small-news-wrapper">
      {haberler.map((haber) => (
        <a
          key={haber.id}
          href={haber.link}
          target="_blank"
          rel="noopener noreferrer"
          className="small-news-box"
        >
          <img src={haber.image} alt={haber.title} />
          <p>{haber.title}</p>
        </a>
      ))}
    </div>
  );
}
