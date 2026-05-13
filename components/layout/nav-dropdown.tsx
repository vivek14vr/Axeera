"use client";

import Link from "next/link";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import type { NavItem } from "@/types/navigation";

type NavDropdownProps = {
  item: NavItem;
};

type MenuPosition = {
  top: number;
  left: number;
};

function ChevronIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5 text-foreground/70 transition-transform duration-200 group-data-[open=true]:rotate-180"
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

export function NavDropdown({ item }: NavDropdownProps) {
  const menuId = useId();
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState<MenuPosition>({ top: 0, left: 0 });
  const canUsePortal = typeof document !== "undefined";

  useEffect(() => {
    return () => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const openMenu = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    updateMenuPosition();
    setIsOpen(true);
  };

  const scheduleClose = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
    }

    closeTimerRef.current = window.setTimeout(() => {
      setIsOpen(false);
      closeTimerRef.current = null;
    }, 200);
  };

  const updateMenuPosition = () => {
    const trigger = triggerRef.current;

    if (!trigger) {
      return;
    }

    const rect = trigger.getBoundingClientRect();
    const menuWidth = menuRef.current?.offsetWidth ?? 224;
    const maxLeft = Math.max(16, window.innerWidth - menuWidth - 16);

    setMenuPosition({
      top: rect.bottom + 6,
      left: Math.min(rect.left, maxLeft),
    });
  };

  useLayoutEffect(() => {
    if (!isOpen) {
      return;
    }

    updateMenuPosition();

    const handleReposition = () => {
      updateMenuPosition();
    };

    window.addEventListener("resize", handleReposition);
    window.addEventListener("scroll", handleReposition, true);

    return () => {
      window.removeEventListener("resize", handleReposition);
      window.removeEventListener("scroll", handleReposition, true);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;

      if (triggerRef.current?.contains(target) || menuRef.current?.contains(target)) {
        return;
      }

      setIsOpen(false);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  if (!item.items?.length) {
    return (
      <Link
        href={item.href}
        className="nav-link shrink-0 whitespace-nowrap text-[13px] font-medium text-foreground/80 xl:text-sm"
      >
        {item.label}
      </Link>
    );
  }

  const menu =
    canUsePortal && isOpen
      ? createPortal(
          <div
            ref={menuRef}
            id={menuId}
            data-open="true"
            className="nav-dropdown-menu glass-surface-strong min-w-56 rounded-2xl p-2 shadow-glass"
            style={{ top: menuPosition.top, left: menuPosition.left }}
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
          >
            <ul className="space-y-1">
              {item.items.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className="nav-dropdown-link block rounded-2xl px-3 py-2 text-sm text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <div
        ref={triggerRef}
        className="group shrink-0"
        data-open={isOpen}
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
      >
        <button
          type="button"
          className="nav-link inline-flex shrink-0 items-center gap-1 whitespace-nowrap text-[13px] font-medium text-foreground/80 xl:text-sm"
          aria-expanded={isOpen}
          aria-controls={menuId}
          aria-haspopup="menu"
          onClick={(event) => {
            event.preventDefault();
            if (!isOpen) {
              openMenu();
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setIsOpen((open) => !open);
            }
          }}
        >
          <span>{item.label}</span>
          <ChevronIcon />
        </button>
      </div>
      {menu}
    </>
  );
}
