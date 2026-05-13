"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { primaryNavigation } from "@/lib/constants/navigation";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils/cn";

const MOBILE_MENU_TOP = "calc(var(--nav-height)+env(safe-area-inset-top,0px))";

type MobileNavProps = {
  isOpen: boolean;
  isExpanded: boolean;
  onClose: () => void;
};

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={cn("h-4 w-4 text-foreground/70 transition-transform", expanded && "rotate-180")}
    >
      <path
        d="M4 6l4 4 4-4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function MobileNav({ isOpen, isExpanded, onClose }: MobileNavProps) {
  const [expandedLabel, setExpandedLabel] = useState<string | null>(null);

  const closeNav = () => {
    setExpandedLabel(null);
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        aria-label="Close navigation menu"
        className="fixed inset-x-0 bottom-0 z-40 bg-[color-mix(in_srgb,var(--background)_82%,var(--foreground)_8%)] backdrop-blur-lg lg:hidden"
        style={{ top: MOBILE_MENU_TOP }}
        onClick={closeNav}
      />
      <div
        id="mobile-navigation"
        data-expanded={isExpanded}
        className="glass-surface-strong glass-mobile-menu absolute inset-x-0 top-full z-[55] max-h-[calc(100dvh-var(--nav-height)-env(safe-area-inset-top,0px))] overflow-y-auto px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-3 shadow-glass sm:px-5 lg:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="space-y-2">
            {primaryNavigation.map((item) => {
              if (!item.items?.length) {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="nav-link mobile-menu-item block w-full rounded-2xl border border-surface-border px-4 py-3 text-base font-medium text-foreground"
                      onClick={closeNav}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              const isItemExpanded = expandedLabel === item.label;

              return (
                <li key={item.label}>
                  <button
                    type="button"
                    className="nav-link mobile-menu-item flex w-full items-center justify-between rounded-2xl border border-surface-border px-4 py-3 text-base font-medium text-foreground"
                    aria-expanded={isItemExpanded}
                    onClick={() =>
                      setExpandedLabel((current) =>
                        current === item.label ? null : item.label,
                      )
                    }
                  >
                    <span>{item.label}</span>
                    <ChevronIcon expanded={isItemExpanded} />
                  </button>
                  {isItemExpanded ? (
                    <ul className="mobile-menu-item mt-2 space-y-1 rounded-2xl border border-surface-border p-2">
                      <li>
                        <Link
                          href={item.href}
                          className="nav-dropdown-link block rounded-2xl px-3 py-2 text-sm text-foreground/90"
                          onClick={closeNav}
                        >
                          Overview
                        </Link>
                      </li>
                      {item.items.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="nav-dropdown-link block rounded-2xl px-3 py-2 text-sm text-foreground/90"
                            onClick={closeNav}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>
        <Button href={routes.contact} className="mt-6 w-full" onClick={closeNav}>
          Get quote
        </Button>
      </div>
    </>
  );
}
