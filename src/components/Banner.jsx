"use client";
import React from "react";
import { Book, Coffee, Music } from "lucide-react";

// Centralized icon mapping outside the component
const ICON_MAP = {
  book: <Book data-testid="book-icon" className="h-16 w-16" />,
  coffee: <Coffee data-testid="coffee-icon" className="h-16 w-16" />,
  music: <Music data-testid="music-icon" className="h-16 w-16" />,
};

export default function Banner({ bannerBg, bannerText, textColor, icon = "book" }) {
  // Inline styles stored in an object for better readability
  const styles = {
    container: {
      backgroundColor: bannerBg,
    },
    text: {
      color: textColor,
    },
  };

  return (
    <div
      className="w-full py-16 px-4 flex flex-col items-center justify-center gap-4 transition-all duration-300"
      style={styles.container}
    >
      <div className="text-center max-w-3xl mx-auto">
        <div className="flex justify-center mb-4" style={styles.text}>
          {ICON_MAP[icon] || ICON_MAP.book}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 transition-all duration-300" style={styles.text}>
          Why I Love Reading
        </h1>
        <p className="text-lg md:text-xl transition-all duration-300" style={styles.text}>
          {bannerText}
        </p>
      </div>
    </div>
  );
}
