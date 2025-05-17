"use client";
import FinanceBar from "@/components/FinanceBar";
import KucukHaber from "@/components/KucukHaber";
import Navbar from "@/components/Navbar";
import NewsSlider from "@/components/NewsSlider";
import StickyAd from "@/components/StickyAd";
import Weather from "@/components/Weather";
import VisitedNews from "@/components/VisitedNews";
import { useState } from "react";

export default function HomePage() {
  const [showHistory, setShowHistory] = useState(false);
  return (
    <div>
      <StickyAd />
      <Navbar />
      <FinanceBar />
      <div style={{ marginLeft: "20px", marginTop: "10px" }}>
        <button onClick={() => setShowHistory(!showHistory)} style={{
          backgroundColor: "#2c3e50",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          Geçmiş
        </button>
        {showHistory && <VisitedNews />}
      </div>
      <div className="main-slider-wrapper">
        <div className="slider-left">
          <NewsSlider />
        </div>

        <div className="slider-right">
          <KucukHaber />
          <Weather />
</div>
</div>

    </div>
  );
}
