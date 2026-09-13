"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/content/site";

/** Thin sticky bar: wordmark left, links right, last link as a solid CTA. */
export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isCurrent = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="site-header">
      <div className="wrap bar">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <Image
            className="brand__mark"
            src="/brand/logo.png"
            alt=""
            width={72}
            height={72}
            sizes="36px"
            priority
          />
          <span className="brand__word">
            360<span>devz</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Main">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={i === nav.length - 1 ? "nav-cta" : undefined}
              aria-current={isCurrent(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Main"
          hidden={!open}
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
