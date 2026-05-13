"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { MobileNav } from "@/components/layout/mobile-nav";
import { NavDropdown } from "@/components/layout/nav-dropdown";
import { Button } from "@/components/ui/button";
import { primaryNavigation } from "@/lib/constants/navigation";
import { routes } from "@/lib/constants/routes";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";

const SCROLL_TOP_THRESHOLD = 16;
const DESKTOP_NAV_MIN_WIDTH = 1024;

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 text-foreground">
      {open ? (
        <path
          d="M6 6l12 12M18 6 6 18"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.75"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.75"
        />
      )}
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const [menuState, setMenuState] = useState({ path: pathname, open: false });
  const isMenuOpen = menuState.open && menuState.path === pathname;

  const setIsMenuOpen = useCallback((open: boolean) => {
    setMenuState({ path: pathname, open });
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setIsExpanded(window.scrollY > SCROLL_TOP_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const onResize = () => {
      if (window.innerWidth >= DESKTOP_NAV_MIN_WIDTH) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isMenuOpen, setIsMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full pt-[env(safe-area-inset-top,0px)]">
      <div
        data-expanded={isExpanded}
        className="glass-nav glass-nav-bar relative z-[60]"
      >
        <div className="relative z-[60] flex min-h-0 flex-row items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-8">
          <Link href="/" className="group inline-flex min-w-0 shrink items-center gap-2.5 sm:gap-3">
            <span className="glass-surface-strong flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-semibold text-accent shadow-brand transition duration-300 group-hover:scale-105 group-hover:border-accent/35 group-hover:shadow-[0_14px_36px_color-mix(in_srgb,var(--accent)_22%,transparent)]">
              A
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-base font-semibold text-foreground sm:text-lg">
                {siteConfig.name}
              </span>
              <span className="hidden text-xs uppercase tracking-[0.24em] text-foreground/70 xl:block">
                Studio
              </span>
            </span>
          </Link>

          <nav className="hidden min-w-0 flex-1 flex-row flex-nowrap items-center justify-center gap-0.5 lg:flex xl:gap-2">
            {primaryNavigation.map((item) => (
              <NavDropdown key={item.label} item={item} />
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Button href={routes.contact} className="hidden px-4 lg:inline-flex lg:px-5">
              Get quote
            </Button>
            <button
              type="button"
              className={cn(
                "relative z-[60] inline-flex h-11 w-11 touch-manipulation items-center justify-center rounded-2xl border border-surface-border bg-surface text-foreground lg:hidden",
                isMenuOpen && "border-accent/30 bg-accent/8",
              )}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuIcon open={isMenuOpen} />
            </button>
          </div>
        </div>
        <MobileNav
          isOpen={isMenuOpen}
          isExpanded={isExpanded}
          onClose={() => setIsMenuOpen(false)}
        />
      </div>
    </header>
  );
}
