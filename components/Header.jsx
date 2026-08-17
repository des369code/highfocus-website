"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Wordmark } from "./shared";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/programmes", label: "Programmes" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="topbar__inner">
          <span>
            <strong>HRD Corp</strong> registered training provider
          </span>
          <span className="topbar__right">
            <span>SSM 749381-M</span>
            <span>Since 2001</span>
            <span>Sungai Petani · Kedah</span>
          </span>
        </div>
      </div>

      <header className="site-header">
        <div className="site-header__inner">
          <Link href="/" onClick={() => setOpen(false)} aria-label="High Focus Training Consultancy — home">
            <Wordmark />
          </Link>
          <nav className="nav" aria-label="Main navigation">
            <ul className="nav__list">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="nav__cta">
                <Link href="/contact?type=booking" className="btn btn--primary">
                  Book Training
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header-cta">
            <Link href="/contact?type=booking" className="btn btn--primary">
              Book Training
            </Link>
          </div>
          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu${open ? " is-open" : ""}`}>
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} className="mobile-menu__link" onClick={() => setOpen(false)}>
            {item.label}
            <small>View section</small>
          </Link>
        ))}
        <div className="mobile-menu__cta">
          <Link href="/contact?type=booking" className="btn btn--primary btn--block btn--lg" onClick={() => setOpen(false)}>
            Book Training
          </Link>
        </div>
      </div>
    </>
  );
}
