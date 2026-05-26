"use client";

import Link from "next/link";

/**
 * Round arrow-only back button. One visual language for "go back" across the
 * whole site — country modal, album detail page, etc.
 *
 * Use either:
 *   <BackArrow onClick={fn} />         — for in-place actions (closing a modal)
 *   <BackArrow href="/" />             — for in-app navigation
 */
export default function BackArrow({
  href,
  onClick,
  ariaLabel = "Back",
  className = "",
}) {
  const baseClass =
    "group flex h-12 w-12 items-center justify-center rounded-full border border-hairline bg-page text-ink transition-all duration-300 hover:border-accent hover:text-accent";

  const icon = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5"
      aria-hidden="true"
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12,19 5,12 12,5" />
    </svg>
  );

  if (href) {
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        className={`${baseClass} ${className}`}
      >
        {icon}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${baseClass} ${className}`}
    >
      {icon}
    </button>
  );
}
