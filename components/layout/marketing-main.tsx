"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect } from "react";

type MarketingMainProps = {
  children: ReactNode;
};

export function MarketingMain({ children }: MarketingMainProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  useEffect(() => {
    const onPageShow = (event: PageTransitionEvent) => {
      if (!event.persisted) {
        return;
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  return (
    <main
      key={pathname}
      className={isHome ? "flex-1" : "flex-1 pt-[calc(var(--nav-height)+1.25rem)]"}
    >
      {children}
    </main>
  );
}
