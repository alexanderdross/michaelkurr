import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

describe("RecommendationsCarousel", () => {
  it("renders the first recommendation by default", async () => {
    const { default: Carousel } = await import(
      "@/components/RecommendationsCarousel"
    );
    render(<Carousel />);

    expect(screen.getByText(/Vishal K\./)).toBeInTheDocument();
    expect(screen.getByText("1 / 11")).toBeInTheDocument();
  });

  it("navigates to next recommendation on button click", async () => {
    const { default: Carousel } = await import(
      "@/components/RecommendationsCarousel"
    );
    render(<Carousel />);

    const nextBtn = screen.getByLabelText("Next recommendation");
    fireEvent.click(nextBtn);

    expect(screen.getByText(/César Nieto/)).toBeInTheDocument();
    expect(screen.getByText("2 / 11")).toBeInTheDocument();
  });

  it("navigates to previous recommendation on button click", async () => {
    const { default: Carousel } = await import(
      "@/components/RecommendationsCarousel"
    );
    render(<Carousel />);

    const prevBtn = screen.getByLabelText("Previous recommendation");
    fireEvent.click(prevBtn);

    // Wraps around to last (Alyssa Fenoglio)
    expect(screen.getByText(/Alyssa Fenoglio/)).toBeInTheDocument();
    expect(screen.getByText("11 / 11")).toBeInTheDocument();
  });

  it("supports keyboard navigation with arrow keys", async () => {
    const { default: Carousel } = await import(
      "@/components/RecommendationsCarousel"
    );
    const { container } = render(<Carousel />);

    const region = container.querySelector('[role="region"]')!;

    // ArrowRight goes next
    fireEvent.keyDown(region, { key: "ArrowRight" });
    expect(screen.getByText(/César Nieto/)).toBeInTheDocument();

    // ArrowLeft goes back
    fireEvent.keyDown(region, { key: "ArrowLeft" });
    expect(screen.getByText(/Vishal K\./)).toBeInTheDocument();
  });

  it("has correct ARIA attributes for accessibility", async () => {
    const { default: Carousel } = await import(
      "@/components/RecommendationsCarousel"
    );
    const { container } = render(<Carousel />);

    const region = container.querySelector('[role="region"]');
    expect(region).toBeTruthy();
    expect(region?.getAttribute("aria-label")).toBe(
      "Colleague recommendations carousel"
    );
    expect(region?.getAttribute("aria-roledescription")).toBe("carousel");
    expect(region?.getAttribute("tabindex")).toBe("0");

    // Card group
    const group = container.querySelector('[role="group"]');
    expect(group).toBeTruthy();
    expect(group?.getAttribute("aria-label")).toBe(
      "Recommendation 1 of 11"
    );
    expect(group?.getAttribute("aria-live")).toBe("polite");
  });

  it("pauses auto-rotation on mouse hover", async () => {
    vi.useFakeTimers();
    const { default: Carousel } = await import(
      "@/components/RecommendationsCarousel"
    );
    const { container } = render(<Carousel />);

    const region = container.querySelector('[role="region"]')!;

    // Hover to pause
    fireEvent.mouseEnter(region);

    // Advance past auto-rotation interval (7s)
    vi.advanceTimersByTime(8000);

    // Should still be on first recommendation
    expect(screen.getByText(/Vishal K\./)).toBeInTheDocument();

    vi.useRealTimers();
  });

  it("pauses auto-rotation on focus", async () => {
    vi.useFakeTimers();
    const { default: Carousel } = await import(
      "@/components/RecommendationsCarousel"
    );
    const { container } = render(<Carousel />);

    const region = container.querySelector('[role="region"]')!;

    // Focus to pause
    fireEvent.focus(region);

    // Advance past auto-rotation interval (7s)
    vi.advanceTimersByTime(8000);

    // Should still be on first recommendation
    expect(screen.getByText(/Vishal K\./)).toBeInTheDocument();

    vi.useRealTimers();
  });

  it("renders 11 dot indicators", async () => {
    const { default: Carousel } = await import(
      "@/components/RecommendationsCarousel"
    );
    const { container } = render(<Carousel />);

    const dots = container.querySelector('[role="group"][aria-label="Recommendation indicators"]');
    expect(dots).toBeTruthy();
    const buttons = dots!.querySelectorAll("button");
    expect(buttons).toHaveLength(11);
  });

  it("navigates to specific recommendation on dot click", async () => {
    const { default: Carousel } = await import(
      "@/components/RecommendationsCarousel"
    );
    const { container } = render(<Carousel />);

    const dots = container.querySelector('[role="group"][aria-label="Recommendation indicators"]');
    const buttons = dots!.querySelectorAll("button");

    // Click on 5th dot (index 4)
    fireEvent.click(buttons[4]);
    expect(screen.getByText(/Dr\. Christian/)).toBeInTheDocument();
    expect(screen.getByText("5 / 11")).toBeInTheDocument();
  });
});
