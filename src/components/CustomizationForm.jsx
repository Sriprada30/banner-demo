import React from "react";

export function CustomizationForm({ bannerBg, setBannerBg, bannerText, setBannerText, textColor, setTextColor, icon, setIcon }) {
    const colorOptions = [
      { name: "Blue", value: "#3498db" },
      { name: "Red", value: "#ff5733" },
      { name: "Green", value: "#2ecc71" },
      { name: "Yellow", value: "#f1c40f" },
      { name: "Purple", value: "#9b59b6" },
    ];
  
    return (
      <div className="max-w-3xl mx-auto w-full p-6">
        <h2 className="text-2xl font-bold mb-6">Customize the Banner</h2>
        <div className="bg-white p-6 rounded-lg shadow-md grid gap-6">
          {/* Banner Text */}
          <div className="grid gap-2">
            <label htmlFor="bannerText" className="font-medium">Banner Text</label>
            <input
              id="bannerText"
              type="text"
              value={bannerText}
              onChange={(e) => setBannerText(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>
  
          {/* Background & Text Color Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[{ label: "Background Color", id: "backgroundColor", color: bannerBg, setColor: setBannerBg },
              { label: "Text Color", id: "textColor", color: textColor, setColor: setTextColor }]
              .map(({ label, id, color, setColor }) => (
                <div key={label} className="grid gap-2">
                  <label htmlFor={id} className="font-medium">{label}</label>
                  <select id={id} value={color} onChange={(e) => setColor(e.target.value)} className="border p-2 rounded w-full">
                    {colorOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
            ))}
          </div>
  
          {/* Icon Selection */}
          <div className="grid gap-2">
            <label htmlFor="iconSelect" className="font-medium">Icon</label>
            <select id="iconSelect" value={icon} onChange={(e) => setIcon(e.target.value)} className="border p-2 rounded w-full">
              <option value="book">📖 Book</option>
              <option value="coffee">☕ Coffee</option>
              <option value="music">🎵 Music</option>
            </select>
          </div>
        </div>
      </div>
    );
}
