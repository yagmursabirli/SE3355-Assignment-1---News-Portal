"use client";
import React, { useState } from "react";
import "./StickyAd.css";

function StickyAd() {
  const [showLeftAd, setShowLeftAd] = useState(true);
  const [showRightAd, setShowRightAd] = useState(true);

  return (
    <>
      {showLeftAd && (
        <div className="ad-banner left">
          <button className="close-btn" onClick={() => setShowLeftAd(false)}>×</button>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <img src="/ads/ayakkabi.jpg" alt="Left Ad" />
          </a>
        </div>
      )}

      {showRightAd && (
        <div className="ad-banner right">
          <button className="close-btn" onClick={() => setShowRightAd(false)}>×</button>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <img src="/ads/ayakkabi.jpg" alt="Right Ad" />
          </a>
        </div>
      )}
    </>
  );
}

export default StickyAd;
