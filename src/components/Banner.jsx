"use client"

import { useState } from "react"
import { Book, Coffee, Music } from "lucide-react"

export  default function BannerCustomizer() {
  const [bannerBg, setBannerBg] = useState("#f43f5e")
  const [bannerText, setBannerText] = useState("Reading opens doors to new worlds and perspectives")
  const [textColor, setTextColor] = useState("#ffffff")
  const [icon, setIcon] = useState("book")

  const renderIcon = () => {
    switch (icon) {
      case "book":
        return <Book className="h-16 w-16" />
      case "coffee":
        return <Coffee className="h-16 w-16" />
      case "music":
        return <Music className="h-16 w-16" />
      default:
        return <Book className="h-16 w-16" />
    }
  }

  return (
    <div className="flex flex-col w-full">
      {/* Banner */}
      <div
        className="w-full py-16 px-4 flex flex-col items-center justify-center gap-4 transition-all duration-300"
        style={{ backgroundColor: bannerBg }}
      >
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <div style={{ color: textColor }}>{renderIcon()}</div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 transition-all duration-300" style={{ color: textColor }}>
            Why I Love Reading
          </h1>
          <p className="text-lg md:text-xl transition-all duration-300" style={{ color: textColor }}>
            {bannerText}
          </p>
        </div>
      </div>

      {/* Customization Form */}
      <div className="max-w-3xl mx-auto w-full p-6">
        <h2 className="text-2xl font-bold mb-6">Customize the Banner</h2>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid gap-6">
            {/* Banner Text */}
            <div className="grid gap-2">
              <label htmlFor="banner-text" className="font-medium">Banner Text</label>
              <input
                id="banner-text"
                type="text"
                value={bannerText}
                onChange={(e) => setBannerText(e.target.value)}
                placeholder="Enter banner text"
                className="border p-2 rounded w-full"
              />
            </div>

            {/* Background Color & Text Color */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="background-color" className="font-medium">Background Color</label>
                <div className="flex gap-2">
                  <input
                    id="background-color"
                    type="color"
                    value={bannerBg}
                    onChange={(e) => setBannerBg(e.target.value)}
                    className="w-12 h-10 p-1 border"
                  />
                  <input
                    type="text"
                    value={bannerBg}
                    onChange={(e) => setBannerBg(e.target.value)}
                    className="flex-1 border p-2 rounded"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <label htmlFor="text-color" className="font-medium">Text Color</label>
                <div className="flex gap-2">
                  <input
                    id="text-color"
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="w-12 h-10 p-1 border"
                  />
                  <input
                    type="text"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="flex-1 border p-2 rounded"
                  />
                </div>
              </div>
            </div>

            {/* Icon Selection */}
            <div className="grid gap-2">
              <label htmlFor="icon" className="font-medium">Icon</label>
              <select
                id="icon"
                value={icon}
                onChange={(e) => setIcon(e.target.value)}
                className="border p-2 rounded w-full"
              >
                <option value="book">📖 Book</option>
                <option value="coffee">☕ Coffee</option>
                <option value="music">🎵 Music</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
