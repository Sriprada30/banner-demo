import { render, screen } from "@testing-library/react";
import Banner from "./Banner";
import React from "react";

describe("Banner Component", () => {
  test("renders with correct background and text color", () => {
    const { container } = render(
      <Banner bannerBg="#ff5733" textColor="#000000" bannerText="Test Banner" icon="book" />
    );

    // Check background color
    expect(container.firstChild).toHaveStyle("background-color: #ff5733");

    // Check text color
    expect(screen.getByText("Test Banner")).toHaveStyle("color: #000000");
  });

  test("renders correct icon", () => {
    render(<Banner bannerBg="#ffffff" textColor="#000000" bannerText="Icon Test" icon="music" />);
    
    // Check if music icon is present
    expect(screen.getByTestId("music-icon")).toBeInTheDocument();
  });
});
