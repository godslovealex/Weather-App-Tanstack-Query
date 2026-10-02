import { Link } from "react-router-dom";
import { CitySearch } from "./city-search";
import { ThemeToggle } from "./theme-toggle";
import { useTheme } from "@/context/theme-provider";
import { Search, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const { theme } = useTheme();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo + Heading */}
        <Link to={"/"} className="flex items-center gap-3">
          <img
            src={theme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
            alt="Climate logo"
            className="h-14 w-14 object-contain transition-all duration-2000 ease-in-out"
          />
          <h1 className="text-lg sm:text-xl font-bold tracking-wide text-foreground">
            WEATHER APP
          </h1>
        </Link>

        {/* Right side controls */}
        <div className="flex items-center gap-4">
          {/* Desktop search */}
          <div className="hidden sm:block">
            <CitySearch />
          </div>

          {/* Mobile search toggle */}
          <button
            className="sm:hidden p-2 rounded-md hover:bg-muted"
            onClick={() => setShowSearch((prev) => !prev)}
          >
            {showSearch ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Search className="h-6 w-6 text-foreground" />
            )}
          </button>

          <ThemeToggle />
        </div>
      </div>

      {/* Mobile search bar */}
      {showSearch && (
        <div className="sm:hidden px-4 py-2 border-t bg-background">
          <CitySearch />
        </div>
      )}
    </header>
  );
}
