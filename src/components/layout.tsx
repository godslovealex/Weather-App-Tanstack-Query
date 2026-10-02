import type { PropsWithChildren } from "react";
import { Header } from "./header";

import { useTheme } from "@/context/theme-provider";

export function Layout({ children }: PropsWithChildren) {
  const { theme } = useTheme();

  return (
    <div className="bg-gradient-to-br from-background to-muted">
      <Header />

      {/* Main content */}
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-8">
        <div className="container mx-auto px-2 flex flex-col items-center gap-2">
          {/* Brand Logo */}
          <img
            src={
              theme === "dark"
                ? "/tifflove_brand_logo_dark.png"
                : "/tifflove_brand_logo_light.png"
            }
            alt="Brand Logo"
            className="h-40 w-auto -mt-7 object-contain drop-shadow-lg"
          />

          {/* Copyright */}
          <p
            className={`text-sm -mt-7 ${
              theme === "dark" ? "text-gray-300" : "text-gray-800"
            }`}
          >
            © {new Date().getFullYear()} Godslove Alex. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
