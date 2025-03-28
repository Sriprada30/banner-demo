import { render, screen, fireEvent } from "@testing-library/react";
import { CustomizationForm } from "./CustomizationForm";
import React from "react";

describe("CustomizationForm Component", () => {
  test("updates banner text correctly", () => {
    const setBannerText = jest.fn();
    render(<CustomizationForm bannerText="Initial Text" setBannerText={setBannerText} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Updated Text" } });

    expect(setBannerText).toHaveBeenCalledWith("Updated Text");
  });

  test("changes background color via dropdown", () => {
    const setBannerBg = jest.fn();
    render(<CustomizationForm bannerBg="#3498db" setBannerBg={setBannerBg} />);

    const select = screen.getByLabelText("Background Color");
    fireEvent.change(select, { target: { value: "#ff5733" } });

    expect(setBannerBg).toHaveBeenCalledWith("#ff5733");
  });

  test("changes icon selection", () => {
    const setIcon = jest.fn();
    render(<CustomizationForm icon="book" setIcon={setIcon} />);

    const select = screen.getByLabelText("Icon");
    fireEvent.change(select, { target: { value: "coffee" } });

    expect(setIcon).toHaveBeenCalledWith("coffee");
  });
});
