"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- defer until next-themes resolves on the client to avoid SSR/CSR icon mismatch
    setMounted(true);
  }, []);

  const isDark = mounted && (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className="text-lg md:text-xl text-brand-yellow-ring hover:text-brand-from transition"
      type="button"
    >
      {isDark ? <BsSunFill /> : <BsMoonFill />}
    </button>
  );
}
