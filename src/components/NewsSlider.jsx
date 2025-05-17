"use client";
import React, { useEffect, useState } from "react";
import "./newsSlider.css";
import { useDispatch } from "react-redux";
import { addToHistory } from "@/store/historySlice";

function NewsSlider() {
  const dispatch = useDispatch();
  const [news, setNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [news.length]);



  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % news.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + news.length) % news.length);
  };

 
const handleClick = (title, link) => {
  dispatch(addToHistory(title));
  window.open(link, "_blank");
};

  if (news.length === 0) return null;


 return (
    <div className="slider-left">
      <div className="slider-image-wrapper">
        <button onClick={prevSlide} className="slider-button left">‹</button>
  <div
    onClick={() =>
      handleClick(news[currentIndex].title, news[currentIndex].link)
    }
    style={{ cursor: "pointer" }}
  >
    <img
      src={news[currentIndex].image}
      alt={news[currentIndex].title}
      className="slider-image"
    />
  </div>


        <button onClick={nextSlide} className="slider-button right">›</button>
      </div>
    </div>
  );

}

export default NewsSlider;
