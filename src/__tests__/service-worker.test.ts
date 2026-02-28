import { describe, it, expect, vi, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import React from "react";

// Reset modules between tests to avoid stale imports
beforeEach(() => {
  vi.resetModules();
  vi.restoreAllMocks();
});

describe("ServiceWorkerRegistration", () => {
  it("registers service worker when supported", async () => {
    const registerMock = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "serviceWorker", {
      value: { register: registerMock },
      writable: true,
      configurable: true,
    });

    const { default: ServiceWorkerRegistration } = await import(
      "@/components/ServiceWorkerRegistration"
    );
    render(React.createElement(ServiceWorkerRegistration));

    await vi.waitFor(() => {
      expect(registerMock).toHaveBeenCalledWith("/sw.js");
    });
  });

  it("does not throw when serviceWorker is falsy", async () => {
    Object.defineProperty(navigator, "serviceWorker", {
      value: undefined,
      writable: true,
      configurable: true,
    });

    const { default: ServiceWorkerRegistration } = await import(
      "@/components/ServiceWorkerRegistration"
    );
    const { container } = render(
      React.createElement(ServiceWorkerRegistration)
    );
    expect(container.innerHTML).toBe("");
  });
});
