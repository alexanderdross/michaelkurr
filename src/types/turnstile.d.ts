interface TurnstileRenderOptions {
  sitekey: string;
  callback?: (token: string) => void;
  "expired-callback"?: () => void;
  theme?: "light" | "dark" | "auto";
}

interface TurnstileInstance {
  render: (container: HTMLElement, options: TurnstileRenderOptions) => string;
  remove: (widgetId: string) => void;
  reset: (widgetId: string) => void;
}

interface Window {
  turnstile?: TurnstileInstance;
}
