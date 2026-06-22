"use client";

export function CookieSettingsLink() {
  return (
    <button
      type="button"
      className="text-left transition hover:text-bronze-100"
      onClick={() => window.dispatchEvent(new Event("zk:cookie-settings"))}
    >
      Настройки cookie
    </button>
  );
}
