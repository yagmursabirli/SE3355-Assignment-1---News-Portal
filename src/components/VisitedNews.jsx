"use client";
import { useSelector } from "react-redux";

export default function VisitedNews() {
  const visited = useSelector((state) => state.history.visited);

  return (
<div
      style={{
        position: "absolute",
        marginTop: "10px",
        width: "220px",
        backgroundColor: "#F5F5F7",
        border: "2px solidrgb(188, 201, 215)",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(112, 98, 98, 0.2)",
        padding: "12px",
        zIndex: 999,
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h4 style={{ color: "black", fontWeight: "bold", marginBottom: "10px" }}>
        Son Ziyaret Edilenler
      </h4>

      <ul style={{ listStyleType: "disc", paddingLeft: "20px", margin: 0 }}>
        {visited.length === 0 ? (
          <li style={{ color: "#777" }}>Henüz haber yok</li>
        ) : (
          visited.map((title, i) => (
            <li
              key={i}
              style={{
                color: "#0a0a0a",
                fontSize: "14px",
                marginBottom: "6px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              }}
              title={title}
            >
              {title}
            </li>
          ))
        )}
      </ul>
    </div>

  );
}
