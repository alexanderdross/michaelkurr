import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Expertise from "@/components/Expertise";
import Leadership from "@/components/Leadership";
import Publications from "@/components/Publications";
import Featured from "@/components/Featured";

expect.extend(toHaveNoViolations);

describe("Accessibility (axe)", () => {
  it("Hero section has no a11y violations", async () => {
    const { container } = render(<Hero />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Contact section has no a11y violations", async () => {
    const { container } = render(<Contact />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Footer has no a11y violations", async () => {
    const { container } = render(<Footer />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Expertise section has no a11y violations", async () => {
    const { container } = render(<Expertise />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Leadership section has no a11y violations", async () => {
    const { container } = render(<Leadership />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Publications section has no a11y violations", async () => {
    const { container } = render(<Publications />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Featured section has no a11y violations", async () => {
    const { container } = render(<Featured />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
