"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { NavDropdown } from "@/components/layout/nav-dropdown";
import { Button } from "@/components/ui/button";
import { primaryNavigation } from "@/lib/constants/navigation";
import { routes } from "@/lib/constants/routes";
import { siteConfig } from "@/lib/constants/site";

const SCROLL_TOP_THRESHOLD = 16;

export function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsExpanded(window.scrollY > SCROLL_TOP_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      <div
        data-expanded={isExpanded}
        className="glass-nav glass-nav-bar relative"
      >
        <div className="relative z-10 flex min-h-0 flex-row items-center justify-between gap-3 px-5 py-3 sm:gap-4 sm:px-8">
          <Link href="/" className="group inline-flex shrink-0 items-center gap-3">
            <span className="glass-surface-strong flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-semibold text-accent shadow-brand transition duration-300 group-hover:scale-105 group-hover:border-accent/35 group-hover:shadow-[0_14px_36px_color-mix(in_srgb,var(--accent)_22%,transparent)]">
              A
            </span>
            <span>
              <span className="block font-display text-lg font-semibold text-foreground">
                {siteConfig.name}
              </span>
              <span className="block text-xs uppercase tracking-[0.24em] text-foreground/70">
                Studio
              </span>
            </span>
          </Link>

          <nav className="hidden min-w-0 flex-1 flex-row flex-nowrap items-center justify-center gap-1 md:flex lg:gap-2">
            {primaryNavigation.map((item) => (
              <NavDropdown key={item.label} item={item} />
            ))}
          </nav>

          <div className="shrink-0">
            <Button href={routes.contact}>Get quote</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
